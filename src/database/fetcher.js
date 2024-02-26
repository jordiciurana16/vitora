import fetch from 'node-fetch';

// Construir la URL de la sol·licitud només per a països
const indicator = 'SP.DYN.LE00.IN';
const url = `https://api.worldbank.org/v2/country?&format=json`;

// Fer una sol·licitud a l'API de World Bank
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Comprovar si les dades estan disponibles
    if (!data || !Array.isArray(data[1])) {
      throw new Error('No s\'han rebut dades o les dades no estan en el format esperat');
    }
    
    // Obtenir les dades dels països
    const countries = data[1].filter(country => country.region.value !== 'Aggregates' && country.region.value !== 'Income levels');
    
    // Construir una llista d'ID de països
    const countryIDs = countries.map(country => country.id);

    // Fer una nova sol·licitud per obtenir les dades d'esperança de vida només per als països
    const lifeExpectancyURL = `https://api.worldbank.org/v2/country/${countryIDs.join(';')}/indicator/${indicator}?date=2021&format=json`;

    // Fer una sol·licitud a l'API de World Bank per obtenir les dades d'esperança de vida només per als països
    return fetch(lifeExpectancyURL);
  })
  .then(response => response.json())
  .then(data => {
    // Tractar les dades rebudes
    const countriesData = data[1];
    const lifeExpectancies = countriesData.map(country => ({
      country: country.country.value,
      lifeExpectancy: country.value ? country.value.toFixed(2) : 'No disponible' // Verificar si hi ha un valor i arrodonir-lo a 2 decimals
    }));

    // Mostrar les dades en el teu programa
    lifeExpectancies.forEach(country => {
      console.log(`${country.country}: ${country.lifeExpectancy} years`);
    });
  })
  .catch(error => {
    console.error('Error en obtenir les dades:', error);
  });
