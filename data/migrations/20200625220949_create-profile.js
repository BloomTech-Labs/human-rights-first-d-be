
exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', table => {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('name');
      table.string('avatarUrl');
      table.timestamps(true, true);
    })
    .createTable('incidents', table => {
      table.increments()
      table.integer('date_posted').notNullable();
      table.string('text', 1000).notNullable();
      table.float('latitude').notNullable();
      table.float('longitude').notNullable();
    })
    .createTable('types', table => {
      table.increments();
      table.string('type').notNullable();
    })
    .createTable('saved_incidents', table => {
      table.increments();
      table.integer('incident_id').references('incidents.id').notNullable();
      table.string('profile_id').references('profiles.id').notNullable();
    })
    .createTable('sources', table => {
      table.increments();
      table.integer('incident_id').references('incidents.id').notNullable();
      table.string('link', 1000).notNullable();
    })
    .createTable('incidents_type', table => {
      table.increments();
      table.integer('incident_id').references('incidents.id').notNullable();
      table.integer('type_id').references('types.id').notNullable();
    });
};
exports.down = (knex) => {
  return knex.schema
  .dropTableIfExists('incidents_type')
  .dropTableIfExists('sources')
  .dropTableIfExists('saved_incidents')
  .dropTableIfExists('types')
  .dropTableIfExists('incidents')
  .dropTableIfExists('profiles');
};