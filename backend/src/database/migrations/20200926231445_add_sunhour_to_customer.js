exports.up = function (knex) {
  return knex.schema.alterTable('customers', (table) => {
    table.integer('sunhour_id').notNullable();
    table
      .foreign('sunhour_id')
      .references('id')
      .inTable('sunhours')
      .onDelete('RESTRICT');
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('customers', (table) => {
    table.dropForeign('sunhour_id');
    table.dropColumn('sunhour_id');
  });
};
