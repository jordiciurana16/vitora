import mysql from 'mysql2/promise'; // Importa el mòdul MySQL

async function main() {
  try {
    const db = await mysql.createConnection({
      host: 'sql11.freemysqlhosting.net',
      user: 'sql11704807',
      password: 'hiyDJ1bs4J',
      database: 'sql11704807',
      port: 3306
    });

    console.log('Connected to the database');

    // Exemple de consulta
    const [rows, fields] = await db.execute('SELECT * FROM exerciseanswers');
    console.log(rows); // Mostrem les files retornades per la consulta

    // Tanquem la connexió un cop acabada la feina
    await db.end();
  } catch (err) {
    console.error('Error connecting to the database:', err);
  }
}

main();
