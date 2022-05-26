// здесь мы описываем как нам заполнить базу с нуля подробнее на http://knexjs.org/#Seeds-API

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('services').del()
  await knex('services').insert([
    {
      title: "DIAGNOSTIC",
      image: "/files/firstService.png"
    },
    {
      title: "TIRES & WHEELS",
      image: "/files/secondService.png"
    },
    {
      title: "ENGINES",
      image: "/files/thirdService.png"
    },
  ]);

};
