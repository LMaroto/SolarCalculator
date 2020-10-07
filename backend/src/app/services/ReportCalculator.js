import CustomerRepository from '../repositories/CustomerRepository';
import ReportRepository from '../repositories/ReportRepository';

class ReportCalculator {
  async single(req, res) {
    const { id } = req.params;

    const { month_start, year_start, month_end, year_end } = req.query;

    // formato: mes/ano/valor_coletado
    const records = await ReportRepository.searchRecords(id, {
      month_start,
      year_start,
      month_end,
      year_end,
    });

    if (!records.length) {
      return res.json([]);
    }
    const currentYear = records
      .map((report) => report.year)
      .reduce((max, current) => Math.max(max, current), -Infinity);

    const goals = await ReportRepository.searchGoals({
      userId: id,
      interval: [currentYear - 1, currentYear],
    });

    const mapping = records.map((record) => {
      const goal = goals[record.year][record.month];
      const percentual = parseFloat(((record.power / goal) * 100).toFixed(2));
      const difference = parseFloat((percentual - 100).toFixed(2));

      return {
        id: record.id,
        month: record.month,
        year: record.year,
        produced: record.power,
        goal,
        percentual,
        difference,
        start: record.start,
        end: record.end,
        obs: record.observation,
      };
    });

    return res.json(mapping);
  }

  async general(req, res) {
    const { month, year } = req.query;

    const allCustomers = await CustomerRepository.index();

    const customers = allCustomers.filter((customer) => customer.access);

    const goals = await ReportRepository.getGoals(year);
    const records = await ReportRepository.getRecords(month, year);

    const report = customers.map((customer) => {
      const goal = goals.find((element) => element.customer_id === customer.id);
      const record = records.find(
        (element) => element.customer_id === customer.id
      );

      const { id, registration_number, name, kWp, expected } = customer;

      if (!record) {
        return {
          id,
          registration_number,
          name,
          kWp,
          expected,
          report: null,
        };
      }

      const percentual = parseFloat(
        ((record.power / goal[month]) * 100).toFixed(2)
      );
      const difference = parseFloat((percentual - 100).toFixed(2));

      const newReport = {
        id,
        registration_number,
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
