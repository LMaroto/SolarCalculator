import connection from '../../database';

class HourRepository {
  async index() {
    const hours = await connection('sunhours').select('*');

    return hours;
  }

  async getById(id) {
    const hours = await connection('sunhours').where('id', id).select('*');

    return hours[0];
  }

  async list(year) {
    const hours = await connection('sunhours').where('year', year).select('*');

    return hours[0];
  }

  async store(data) {
    const hours = await connection('sunhours').returning('*').insert(data);

    return hours[0];
  }

  /*
    Data contém req.body estruturado da mesma forma que no create, mas contendo
    apenas os dados que serão alterados.
  */
  async update(id, data) {
    const hours = await connection('sunhours')
      .where('id', id)
      .returning('*')
      .update(data);

    return hours[0];
  }

  async delete(id) {
    await connection('sunhours').where('id', id).del();
  }
}

export default new HourRepository();
