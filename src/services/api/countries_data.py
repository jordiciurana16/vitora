import requests

def fetch_countries_data():
    indicator = 'SP.DYN.LE00.IN'
    url = 'https://api.worldbank.org/v2/country?&format=json&per_page=1000'

    response = requests.get(url)
    data = response.json()

    if not data or not isinstance(data[1], list):
        raise ValueError('No s\'han rebut dades o les dades no estan en el format esperat')

    countries = [country for country in data[1] if country['region']['value'] != 'Aggregates' and country['region']['value'] != 'Income levels']
    countryIDs = [country['id'] for country in countries]

    lifeExpectancyURL = f'https://api.worldbank.org/v2/country/{";".join(countryIDs)}/indicator/{indicator}?date=2021&format=json&per_page=1000'

    response = requests.get(lifeExpectancyURL)
    data = response.json()

    countriesData = data[1]
    countries_data = []

    for country in countriesData:
        country_id = country['country']['id']
        country_name = country['country']['value']
        life_expectancy = float(country['value']) if country['value'] is not None else None
        countries_data.append({'id': country_id, 'name': country_name, 'lifeExpectancy': life_expectancy})

    return countries_data

countries_data = fetch_countries_data()

if __name__ == "__main__":
    for country in countries_data:
        print(f"{country['id']} - {country['name']}: {country['lifeExpectancy']} years")
