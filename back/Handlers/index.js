const {files} = require('./files')
const {service} = require('./service')

// передаем объект соеденения базы данных в обработчики
const initHandlers = (dbConnectionInstance) => ({
    service: service(dbConnectionInstance),
    files,
})

module.exports = {initHandlers};