exports.up = function (knex) {
  return knex.schema.createTable('records', (table) => {
    table.increments('id').primary();
    table.integer('customer_id').notNullable();
    table.foreign('customer_id').references('id').inTable('customers').onDelete('CASCADE');
    table.enum('month', ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']).notNullable();
    table.integer('year').notNullable();
    table.double('power').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('records');
};
