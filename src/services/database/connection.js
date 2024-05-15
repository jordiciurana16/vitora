// Importa els mòduls necessaris
import mysql from 'mysql2/promise'; // Importa el mòdul MySQL
import express from 'express';
import cors from 'cors';

// Configura les opcions de connexió a la nova base de dades
const connection = await mysql.createConnection({
  host: 'sql11.freemysqlhosting.net',
  user: 'sql11704807',
  password: 'hiyDJ1bs4J',
  database: 'sql11704807',
  port: 3306
});

// Connecta amb la nova base de dades
try {
  await connection.connect();
  console.log('Connected to the MySQL database successfully');
} catch (err) {
  console.error('Error connecting to database:', err);
}

// Crea una nova instància de l'aplicació Express
const app = express();
app.use(cors());

// Ruta per obtenir les dades de la taula específica de la base de dades
app.get('/table/:tableName', async (req, res) => {
  const { tableName } = req.params;
  // Validar el nom de la taula
  if (!isValidTableName(tableName)) {
    return res.status(400).send('Invalid table name');
  }

  try {
    // Executa una consulta a la base de dades per obtenir les dades de la taula específica
    const [rows] = await connection.query({ sql: `SELECT * FROM ${tableName}`, rows: true });
    res.json(rows);
  } catch (err) {
    console.error('Error executing the query:', err);
    res.status(500).send(`Error getting table data for ${tableName}`);
  }
});

// Funció per validar el nom de la taula
function isValidTableName(tableName) {
  // Defineix una llista de noms de taules vàlids
  const validTableNames = ['geneticquestions', 'geneticanswers', 'exercisequestions', 'exerciseanswers', 'geographyquestions', 'geographyanswers'];

  // Comprova si el nom de la taula es troba a la llista de noms de taules vàlids
  return validTableNames.includes(tableName);
}

// Maneja els errors del servidor Express
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});

// Escolta al port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Exporta la connexió per a ser utilitzada en altres fitxers
export default connection;
