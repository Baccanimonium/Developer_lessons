const knex = require("knex");

// здесь описано подключение к базе данной библеотекой knex, подробнее в http://knexjs.org
const createDbConnection = ({dbConnection, ...connectionDetails}) => knex({
  client: dbConnection,
  connection: {
    ...connectionDetails,
    charset: "utf8",
    ssl: connectionDetails.ssl === "true" ? {rejectUnauthorized: false} : false,
  },
});

module.exports = {createDbConnection};
