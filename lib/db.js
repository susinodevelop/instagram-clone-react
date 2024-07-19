const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path')

async function openDB() {
  return open({
    filename: path.join(process.cwd(), 'database.sqlite'),
    driver: sqlite3.Database
  });
}

module.exports = { openDB };
