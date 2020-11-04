var dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: '../data/ddb' },
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
    pool: {
      afterCreate: (conn, done) => {
        conn.run(`PRAGMA foreign_keys = ON`, done);
      },
    },
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:',
    },
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: { directory: '../data/migrations' },
    seeds: { directory: '../data/seeds' },
  },
};
