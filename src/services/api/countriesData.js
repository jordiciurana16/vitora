export async function fetchCountriesData(indicator) {
  const url = 'https://api.worldbank.org/v2/country?&format=json&per_page=1000';

  try {
    const response = await fetch(url); // Utilitza la funció fetch del navegador
    
    if (!response.ok) {
      throw new Error('Error en la resposta del servidor');
    }

    const data = await response.json();

    if (!data || !Array.isArray(data[1])) {
      throw new Error('No s\'han rebut dades o les dades no estan en el format esperat');
    }

    const countries = data[1].filter(
      country_ => country_['region']['value'] !== 'Aggregates' && country_['region']['value'] !== 'Income levels'
    );
    const countryIds = countries.filter(country_ => country_['id']).map(country_ => country_['id']);

    const lifeExpectancyUrl = `https://api.worldbank.org/v2/country/${countryIds.join(';')}/indicator/${indicator}?date=2021&format=json&per_page=1000`;

    const lifeExpectancyResponse = await fetch(lifeExpectancyUrl); // Utilitza la funció fetch del navegador

    if (!lifeExpectancyResponse.ok) {
      throw new Error('Error en la resposta del servidor');
    }

    const lifeExpectancyData = await lifeExpectancyResponse.json();

    const countriesData = lifeExpectancyData[1];
    const countriesDataFormatted = [];

    for (const country of countriesData) {
      const countryId = country['country']['id'];
      const countryName = country['country']['value'];
      const lifeExpectancy = country['value'] !== null ? parseFloat(country['value']) : null;
      countriesDataFormatted.push({ id: countryId, name: countryName, lifeExpectancy: lifeExpectancy });
    }

    // Ordena els països alfabèticament per nom
    countriesDataFormatted.sort((a, b) => a.name.localeCompare(b.name));

    // Retorna les dades enlloc d'imprimir-les a la consola
    return countriesDataFormatted;

  } catch (error) {
    console.error(`S'ha produït un error en recuperar les dades: ${error.message}`);
    throw error; // Re-llança l'error perquè el gestor de l'error extern pugui manejar-lo
  }
}
