import connection from '../../database';

class CustomerRepository {
  async index() {
    const customers = await connection('customers').select('*');
    return customers;
  }

  async findById(id) {
    const customer = await connection('customers').select('*').where('id', id);

    return customer[0];
  }

  async store({
    registration_number,
    name,
    address,
    kWp,
    expected,
    access,
    devices,
  }) {
    let customers;
    await connection.transaction(async (transaction) => {
      try {
        customers = await connection('customers')
          .transacting(transaction)
          .returning('*')
          .insert({
            registration_number,
            name,
            address,
            kWp,
            expected,
            access,
          });

        const customerDevices = devices.map((device) => ({
          ...device,
          customer_id: customers[0].id,
        }));

        await connection('devices')
          .transacting(transaction)
          .insert(customerDevices);

        await transaction.commit();
      } catch (err) {
        await transaction.rollback();
      }
    });

    return customers[0];
  }

  async update(id, { name, address, expected, access }) {
    const update = await connection('customers')
      .returning('*')
      .where('id', id)
      .update({
        registration_number,
        name,
        address,
        expected,
        access,
      });

    return update[0];
  }

  async delete(id) {
    await connection('customers').where('id', id).del();
  }
}

export default new CustomerRepository();
