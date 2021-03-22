
exports.up = function(knex) {
   return knex.schema.createTable('emotions', (table) => {
        table.increments('id')
        table.string('URL')
        table.string('emotion')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('emotions')
};
