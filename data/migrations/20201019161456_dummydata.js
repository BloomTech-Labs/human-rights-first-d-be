
exports.up = function(knex) {
  return(
      knex.schema
        .createTable('dummy_data', (tbl) => {
            tbl.integer('id').unique().primary().notNullable()
            tbl.string('date_text', 1000)
            tbl.string('text', 1000)
            tbl.string('tags_str', 1000)
            tbl.float('LATITUDE')
            tbl.float('LONGITUDE')
            tbl.string('Link1', 1000)
            tbl.string('Link2', 1000)
        })
  );
};

exports.down = function(knex) {
  return(
      knex.schema
        .dropTableIfExists('dummy_data')
  )
};
