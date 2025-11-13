// db.js
const { Pool } = require('pg');

// configure your Postgres connection
const pool = new Pool({
  user: 'uniquestdb_user',
  host: 'dpg-d49nbu95pdvs73do70hg-a',
  database: 'uniquestdb',
  password: 'vnAogNDzl1ncCo29w8xElhh16y9UzzOB',
  port: 5432,
});

// test connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('DB Connection Error:', err.stack);
  } else {
    console.log('Connected to PostgreSQL database');
    release();
  }
});

// create users table if it doesn't exist
const createUsersTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  fullName VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  role VARCHAR(50) DEFAULT 'applicant'
);
`;

pool.query(createUsersTableQuery)
  .then(() => console.log('Users table ensured'))
  .catch(err => console.error('Error creating users table:', err));

module.exports = pool;
