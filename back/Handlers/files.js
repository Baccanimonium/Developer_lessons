fs = require('fs');
// обрабочик загрузки файлов
const files = (fastify, _opts, done) => {
  fastify.post('/upload/*',
    async function (request, reply) {
      const files = request.raw.files // получем список файлов
      const path = request.url.split("/") // првращаем запрос в путь(прим. '/services/asd' => ["services", "asd"]
      let folder = './files' // базовая папка хранения файлов
      if (path.length > 3) {
        folder = folder + `/${path[path.length - 1]}` // добавляем к базовой папке папке наш путь
      }
      // проверяем и создаем папку если ее нет
      if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
      }
      let fileArr = []
      let promiseArray = []
      // обрабатываем файлы в цикле т.к. их может быть много
      for (let key in files) {
        const ext = files[key].name.split(".") // смотрим на разрешение файла
        // меняем название файла, на уникальное во избежании перетераний файлов
        const fileName = `${folder}/${Math.floor(new Date().getTime() / 1000)}_.${ext[ext.length - 1]}`
        fileArr.push(fileName)
        // записываем файлы
        promiseArray.push(new Promise((resolve, reject) => {
          fs.writeFile(
            fileName,
            files[key].data,
            function (err) {
              if (err) {
                request.code(500).send("unable to save file")
                // delete
                fileArr.forEach((file) => {
                  fs.unlinkSync(file)
                })
                reject(fileName)
              } else {
                resolve(fileName)
              }
            });
        }))
      }

      // отправляем названия сохраненных файлов обратно
      reply.send((await Promise.allSettled(promiseArray)).reduce((acc, {status, value}) => {
        if (status === 'fulfilled') {
          acc.push(value.slice(1))
        }
        return acc
      }, []))
    })


  done();
};


module.exports = {files};