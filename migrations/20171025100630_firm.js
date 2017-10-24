exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('firm', (table) => {
      table.increments('id')
      table.string('about')
      table.string('service')
      table.string('contact')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('firm')
};
