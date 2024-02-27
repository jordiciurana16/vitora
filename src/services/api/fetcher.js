import fetch from 'node-fetch';

const indicator = 'SP.DYN.LE00.IN';
const url = `https://api.worldbank.org/v2/country?&format=json&per_page=1000`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (!data || !Array.isArray(data[1])) {
      throw new Error('No s\'han rebut dades o les dades no estan en el format esperat');
    }

    const countries = data[1].filter(country => country.region.value !== 'Aggregates' && country.region.value !== 'Income levels');
    const countryIDs = countries.map(country => country.id);

    const lifeExpectancyURL = `https://api.worldbank.org/v2/country/${countryIDs.join(';')}/indicator/${indicator}?date=2021&format=json&per_page=1000`;

    return fetch(lifeExpectancyURL);
  })
  .then(response => response.json())
  .then(data => {
    const countriesData = data[1];
    const lifeExpectancies = countriesData.map(country => ({
      id: country.country.id,
      country: country.country.value,
      lifeExpectancy: country.value ? country.value.toFixed(2) : 'No disponible'
    }));

    lifeExpectancies.forEach(country => {
      console.log(`${country.id} - ${country.country}: ${country.lifeExpectancy} years`);
    });
  })
  .catch(error => {
    console.error('Error en obtenir les dades:', error);
  });

//test

