require("dotenv").config({path: '../.env'});
// здесь описан конфиг для запуска глобальных комманд в базу данных библиотекой knex, подробнее http://knexjs.org
module.exports = {
  client: process.env.DB_CONNECTION,
  connection: {
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    host: process.env.DB_MIGRATION_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  },
  migrations: {
    directory: __dirname + '/migrations'
  },
  seeds: {
    directory: './seeds'
  }
};