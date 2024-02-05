// Import necessary modules
import mysql from 'mysql2/promise'; // Import the MySQL module
import express from 'express';
import cors from 'cors';


// Configure the database connection options
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Firenze30',
  database: 'vitora'
});

// Connect to the database
try {
  await connection.connect();
  console.log('Connected to the MySQL database successfully'); // Connection to the MySQL database successful
} catch (err) {
  console.error('Error connecting to database:', err); // Error connecting to the database
}

// Create a new instance of the Express application
const app = express();
app.use(cors());


// Route to get the table from the database
app.get('/data', async (req, res) => {
  try {
    // Execute a query to the database to get the desired table
    const [rows] = await connection.query({ sql: 'SELECT * FROM geneticquestions', rows: true });
    // Send the table data as response
    console.log('Table data:', rows); // Table data
    res.json(rows);
  } catch (err) {
    console.error('Error executing the query:', err); // Error executing the query
    res.status(500).send('Error getting the table'); // Error getting the table
  }
});

// Handle Express server errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error'); // Server error
});

// Listen on port 3000 (or any other port you desire)
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`); // Server listening on port
});

// Export the connection to be used in other files
export default connection;
