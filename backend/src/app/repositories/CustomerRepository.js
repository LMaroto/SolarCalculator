import connection from "../../database";

class CustomerRepository {
  async index() {
    const customers = await connection("customers").select("*");
    return customers;
  }

  async findById(id) {
    const customer = await connection("customers").select("*").where("id", id);

    return customer[0];
  }

  async store({ name, address, kWp, expected, access }) {
    const customer = await connection("customers").returning("*").insert({
      name,
      address,
      kWp,
      expected,
      access,
    });

    return customer[0];
  }

  async update(id, { name, address, expected, access }) {
    const update = await connection("customers")
      .returning("*")
      .where("id", id)
      .update({
        name,
        address,
        expected,
        access,
      });

    return update[0];
  }

  async delete(id) {
    await connection("customers").where("id", id).del();
  }
}

export default new CustomerRepository();
