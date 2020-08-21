import connection from '../../database';

const MONTH_TO_INT = {
  'jan': 1,
  'fev': 2,
  'mar': 3,
  'abr': 4,
  'mai': 5,
  'jun': 6,
  'jul': 7,
  'aug': 8,
  'set': 9,
  'out': 10,
  'nov': 11,
  'dez': 12,
};

function sortByMonthAndDate(record, anotherRecord) {
  if (record.year < anotherRecord.year) {
    return -1;
  }

  if (record.year > anotherRecord.year) {
    return 1;
  }

  if (MONTH_TO_INT[record.month] < MONTH_TO_INT[anotherRecord.month]) {
    return -1;
  }

  if (MONTH_TO_INT[record.month] > MONTH_TO_INT[anotherRecord.month]) {
    return 1;
  }

  return 0;
}
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

    records.sort(sortByMonthAndDate);

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
