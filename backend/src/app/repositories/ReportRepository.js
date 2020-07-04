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

  async searchRecord(id, month, year) {
    const record = await connection('records')
      .where({
        customer_id: id,
        month,
        year,
      })
      .select('power');

    return record[0].power;
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
