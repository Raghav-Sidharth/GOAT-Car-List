/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments('id').primary()
    table.string('manufacturer')
    table.string('model')
    table.string('year')
    table.string('cost')
    table.string('imageUrl')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
}
