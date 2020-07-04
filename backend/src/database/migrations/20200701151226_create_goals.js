exports.up = function (knex) {
  return knex.schema.createTable('goals', (table) => {
    table.increments('id').primary();
    table.integer('customer_id').notNullable();
    table.foreign('customer_id').references('id').inTable('customers').onDelete('CASCADE');
    table.integer('year').notNullable();
    table.double('jan').notNullable();
    table.double('fev').notNullable();
    table.double('mar').notNullable();
    table.double('abr').notNullable();
    table.double('mai').notNullable();
    table.double('jun').notNullable();
    table.double('jul').notNullable();
    table.double('ago').notNullable();
    table.double('set').notNullable();
    table.double('out').notNullable();
    table.double('nov').notNullable();
    table.double('dez').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('goals');
};
