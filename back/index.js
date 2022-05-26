const fastify = require('fastify')
const fileUpload = require('fastify-file-upload')
const cors = require("@fastify/cors");
const { createDbConnection } = require("./createDbConnection");
const { initHandlers } = require("./Handlers");
// require("dotenv").config({path: '../.env'});

// Создаем функцию и тут же ее запускам, очень важный момент - ее синтаксиc выглядит как (() => {})() это самовызывающаяся функция
(async () => {
  const app = fastify({ logger: true }) // Создаем объект нашего приложения
  const connectionInstance = createDbConnection({
    dbConnection: process.env.DB_CONNECTION,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: process.env.DB_SSL
  }); // создаем объект подключения к базе

  // создаем обработчики запросов
  const handlers = initHandlers(connectionInstance)

  // подключаем плагины, cors позволяет нам обращаться со сторонних сайтов
  app.register(cors, {
    origin: true,
    credentials: true,
  });

  // подключаем плагины, fileUpload позволяет нам принимать файлы
  app.register(fileUpload)

  // подключаем обработчики запросов
  app.register(handlers.service,  { prefix: "/api" });
  app.register(handlers.files,  { prefix: "/api" });

  try {
    // await app.listen(process.env.PORT) // docker-less start
    // запускаем наше приложение
    await app.listen(process.env.PORT, '0.0.0.0')
  } catch (err) {
    // в случаее ошибки выводим ошибку в консоль и завершаем процесс
    app.log.error(err)
    process.exit(1)
  }
})()