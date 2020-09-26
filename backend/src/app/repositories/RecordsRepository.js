import connection from '../../database';

class RecordsRepository {
  async index(customer_id) {
    const records = await connection('records')
      .where('customer_id', customer_id)
      .select('*');

    return records;
  }

  async store(customer_id, { month, year, power, start, end, observation }) {
    const record = await connection('records')
      .returning(['id', 'customer_id', 'month', 'year', 'power'])
      .insert({
        customer_id,
        month,
        year,
        power,
        start,
        end,
        observation,
      });

    return record[0];
  }

  async update(id, customer_id, { month, year, power }) {
    const record = await connection('records')
      .returning(['id', 'customer_id', 'month', 'year', 'power'])
      .where({
        id,
        customer_id,
      })
      .update({
        month,
        year,
        power,
      });

    return record[0];
  }

  async delete(id, customer_id) {
    await connection('records')
      .where({
        id,
        customer_id,
      })
      .del();
  }
}

export default new RecordsRepository();
