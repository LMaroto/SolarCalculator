import connection from '../../database';

class ReportRepository {
  async searchGoal(id, month, year) {
    const goal = await connection('goals')
      .where({
        customer_id: id,
        year,
      })
      .select(month);

    return goal[0][month];
  }

  async searchRecords(id) {
    const records = await connection('records')
      .where({ customer_id: id })
      .limit(12)
      .orderBy([{ column: 'year', order: 'asc' }, { column: 'month', order: 'asc' }])
      .select('*');

    return records;
  }

  async searchGoals({ userId, interval }) {
    const goals = await connection('goals')
      .where({ customer_id: userId, year: interval[0] })
      .orWhere({ customer_id: userId, year: interval[1] })
      .select('*');

    const mapping = {};

    interval.forEach((year) => {
      const goal = goals.find((g) => g.year === year);

      if (goal) {
        const {
          jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez,
        } = goal;

        mapping[year] = {
          jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez,
        };
      }
    });

    return mapping;
  }

  async getGoals(year) {
    const goals = await connection('goals')
      .where({
        year,
      })
      .select('*');

    return goals;
  }

  async getRecords(month, year) {
    const records = await connection('records')
      .where({
        month,
        year,
      })
      .select('customer_id', 'power');

    return records;
  }
}

export default new ReportRepository();
