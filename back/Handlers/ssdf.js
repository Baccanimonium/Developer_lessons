const { TABLE_SERVICES } = require('../constants')
const service = (dbConnectionInstance) => (fastify, _opts, done) => {
  // получаем все сервисы
  fastify.get(
    "/t",
    () => dbConnectionInstance.select("id", "title", "image").from(TABLE_SERVICES)
  )
  // создаем сервис
  fastify.post(
    "/t",
    ({body: { title, image }}) => {
      return dbConnectionInstance(TABLE_SERVICES)
        .returning(["id", "title", "image"])
        .insert({ title, image, created_at: new Date(), updated_at: new Date() })
    }
  )
  // создаем 1 сервис по его id
  fastify.get(
    "/t/:id",
    async ({params: { id }}) => dbConnectionInstance
      .select("id", "title", "image")
      .where({ id })
      .from(TABLE_SERVICES)
  );
  // обновляем 1 сервис по его id
  fastify.put(
    "/t/:id",
    async ({params: { id }, body: { title, image}}) => dbConnectionInstance(TABLE_SERVICES)
      .where({ id })
      .update({ title, image, updated_at: new Date() })
      .returning("*")
  );
  // удаляем 1 сервис по его id
  fastify.delete(
    "/t/:id",
    async ({params: { id }}) => dbConnectionInstance(TABLE_SERVICES)
      .where({ id })
      .del()
  );

  done()
}

module.exports = {service};