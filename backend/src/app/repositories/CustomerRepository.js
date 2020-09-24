import connection from '../../database';

class CustomerRepository {
  async index() {
    const customers = await connection('customers').select('*');
    return customers;
  }

  async findById(id) {
    const customer = await connection('customers').select('*').where('id', id);

    if (customer.length > 0) {
      const devices = await connection('devices')
        .select(['id', 'name', 'install_date'])
        .where('customer_id', id);

      return { ...customer[0], devices };
    }

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
    let values;
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

        values = await connection('devices')
          .transacting(transaction)
          .returning(['name', 'install_date'])
          .insert(customerDevices);

        await transaction.commit();
      } catch (err) {
        await transaction.rollback();
      }
    });

    return { ...customers[0], devices: values };
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
