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
      table.increments('table_id');
      table.string('id').notNullable();
      table.string('state');
      table.string('city');
      table.string('date').notNullable();
      table.string('title', 1000).notNullable();
      table.string('description');
      table.float('lat').notNullable();
      table.float('long').notNullable();
      table.boolean('lethal', 255);
      table.string('race_victim', 255);
      table.string('race_police_officer', 255);
      table.string('victim_gender', 255);
      table.string('police_officer_gender', 255);
    })
    .createTable('types', (table) => {
      table.increments();
      table.string('type').notNullable();
    })
    .createTable('saved_incidents', (table) => {
      table.increments();
      table.string('incident_id').references('incidents.table_id').notNullable();
      table.string('profile_id').references('profiles.id').notNullable();
    })
    .createTable('sources', (table) => {
      table.increments();
      table.string('incident_id').references('incidents.table_id').notNullable();
      table.string('link', 1000).notNullable();
      table.string('origin', 255);
    })
    .createTable('incidents_type', (table) => {
      table.increments();
      table.string('incident_id').references('incidents.table_id').notNullable();
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
