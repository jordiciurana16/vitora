// Importa els mòduls necessaris
import mysql from 'mysql2/promise';
import express from 'express';

// Configura les opcions de connexió a la base de dades
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Firenze30',
  database: 'vitora'
});

// Connecta a la base de dades
try {
  await connection.connect();
  console.log('Connexió a la base de dades MySQL satisfactòria');
} catch (err) {
  console.error('Error connectant a la base de dades:', err);
}

// Crea una nova instància de l'aplicació Express
const app = express();

// Ruta per obtenir la taula de la base de dades
// Ruta per obtenir la taula de la base de dades
app.get('/taula', async (req, res) => {
  try {
    // Executa una consulta a la base de dades per obtenir la taula desitjada
    const [rows] = await connection.query({ sql: 'SELECT * FROM geneticquestions', rows: true });
    // Envia les dades de la taula com a resposta
    console.log('Dades de la taula:', rows);
    res.json(rows);
  } catch (err) {
    console.error('Error en executar la consulta:', err);
    res.status(500).send('Error en obtenir la taula');
  }
});


// Gestionar els errors del servidor Express
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error del servidor');
});

// Escolta el port 3000 (o qualsevol altre port que desitgis)
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escoltant al port ${port}`);
});

// Exporta la connexió per poder utilitzar-la en altres fitxers
export default connection;
