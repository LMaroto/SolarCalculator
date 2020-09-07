exports.up = function (knex) {
  return knex.schema.createTable('customers', (table) => {
    table.increments('id').primary();
    table.string('registration_number').notNullable();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.double('kWp').notNullable();
    table.string('expected').notNullable();
    table.boolean('access').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('customers');
};
