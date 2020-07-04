import CustomerRepository from '../repositories/CustomerRepository';
import ReportRepository from '../repositories/ReportRepository';

class ReportCalculator {
  async single(req, res) {
    const { id } = req.params;
    const { month, year } = req.query;

    const goal = await ReportRepository.searchGoal(id, month, year);
    const record = await ReportRepository.searchRecord(id, month, year);
    const percentual = parseFloat(((record / goal) * 100).toFixed(2));
    const difference = parseFloat((percentual - 100).toFixed(2));

    const report = {
      goal,
      record,
      percentual,
      difference,
    };

    return res.json(report);
  }

  async general(req, res) {
    const { month, year } = req.query;

    const allCustomers = await CustomerRepository.index();

    const customers = allCustomers.filter((customer) => customer.access);

    const goals = await ReportRepository.getGoals(year);
    const records = await ReportRepository.getRecords(month, year);

    const report = customers.map((customer) => {
      const goal = goals.find((element) => element.customer_id === customer.id);
      const record = records.find((element) => element.customer_id === customer.id);

      const {
        id, name, kWp, expected,
      } = customer;

      if (!record) {
        return {
          id, name, kWp, expected, report: null,
        };
      }

      const percentual = parseFloat(((record.power / goal[month]) * 100).toFixed(2));
      const difference = parseFloat((percentual - 100).toFixed(2));

      const newReport = {
        id,
        name,
        kWp,
        expected,
        report: {
          goal: goal[month],
          record: record.power,
          percentual,
          difference,
        },
      };
      return newReport;
    });

    return res.json(report);
  }
}

export default new ReportCalculator();
