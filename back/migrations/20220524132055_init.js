// здесь мы описываем как нам создать в базе сущности http://knexjs.org/#Schema
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
  return knex.schema
    .createTable("services", function (table) {
      table.uuid("id").primary().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string("title", 100).notNullable();
      table.string("image", 255).notNullable();
      table.timestamps();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable("services");
};
