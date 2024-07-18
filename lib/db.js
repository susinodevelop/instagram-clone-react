const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function openDB() {
  return open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  });
}

module.exports = { openDB };
