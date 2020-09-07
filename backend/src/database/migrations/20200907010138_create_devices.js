exports.up = function (knex) {
  return knex.schema.createTable('devices', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('customer_id').notNullable();
    table
      .foreign('customer_id')
      .references('id')
      .inTable('customers')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('devices');
};
