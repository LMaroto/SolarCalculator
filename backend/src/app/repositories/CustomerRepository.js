import connection from '../../database';

class CustomerRepository {
  async index() {
    const customers = await connection('customers')
      .select('customers.*', 'sunhours.city', 'sunhours.uf')
      .join('sunhours', 'sunhours.id', 'customers.sunhour_id')
      .orderBy('registration_number');

    const customersWithDevices = [];

    for (var customer of customers) {
      const devices = await connection('devices')
        .select(['id', 'name', 'install_date'])
        .where('customer_id', customer.id);

      customersWithDevices.push({ ...customer, devices });
    }

    return customersWithDevices;
  }

  async findById(id) {
    const customer = await connection('customers')
      .select('customers.*', 'sunhours.city', 'sunhours.uf')
      .join('sunhours', 'sunhours.id', 'customers.sunhour_id')
      .where('customers.id', id);

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
    sunhour_id,
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
            sunhour_id,
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
