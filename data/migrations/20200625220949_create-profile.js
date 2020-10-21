/* 
Have yet to implement incident type because this was all the data we were 
given for the time being. You'll probably want to make a seperate table for
types (id, type). Then an incident_type table, that has incident_id and type_id.
*/

exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', (table) => {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('name');
      table.string('avatarUrl');
      table.timestamps(true, true);
    })
    .createTable('incidents', (table) => {
      table.string('id').notNullable().unique().primary();
      table.string('state');
      table.string('city');
      table.string('date').notNullable();
      table.string('title', 1000).notNullable();
      table.string('description', 10000);
      table.float('lat').notNullable();
      table.float('long').notNullable();
    })
    .createTable('sources', (table) => {
      table.increments();
      table.string('incident_id').references('incidents.id').notNullable();
      table.string('link', 1000).notNullable();
    });
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('sources')
    .dropTableIfExists('incidents')
    .dropTableIfExists('profiles');
};
