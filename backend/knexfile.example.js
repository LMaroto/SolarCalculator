// Update with your config settings.

/**
 * Arquivo que deve ser utilizado na criação de um knexfile.js.
 *
 * Preencha os dados de acordo com o ambiente selecionado.
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'solarcalculator',
      user: 'postgres',
      password: 'docker',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: {
      directory: './src/database/seeds',
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
