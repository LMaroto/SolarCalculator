exports.up = function (knex) {
  return knex.schema.createTable('sunhours', (table) => {
    table.increments('id').primary();
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
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('sunhours');
};
