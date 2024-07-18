const { openDB } = require('./db');
const fs = require('fs');
const path = require('path');

async function setup() {
  const db = await openDB();
  
  // Ejecutar schema.sql
  const schemaPath = path.join(process.cwd(), 'public', 'bbdd', 'schema.sql');
  const schema = fs.readFileSync(schemaPath, 'utf-8');
  await db.exec(schema);

  // Ejecutar data.sql
  const dataPath = path.join(process.cwd(), 'public', 'bbdd', 'data.sql');
  const data = fs.readFileSync(dataPath, 'utf-8');
  await db.exec(data);

  console.log('Database setup complete');
}

setup();
