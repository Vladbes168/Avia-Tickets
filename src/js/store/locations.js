import api from '../services/apiService';

class Locations {
    constructor(api) {
        this.api = api;
        this.countries = null;
        this.cities = null;
        this.shortCitiesList = null;
    }
    async init() {
        const response = await Promise.all([
            this.api.countries(),
            this.api.cities()
        ]);
        const [countries, cities] = response
        this.countries = this.serializeCountries(countries);
        this.cities = this.serializeCities(cities);
        this.shortCitiesList = this.createShortCitiesList(this.cities)
        return response
    }

    createShortCitiesList(cities) {
        // {City, Country = null}
        return Object.entries(cities).reduce((acc, [key]) => {
            acc[key] = null;
            return acc
        }, {})
    }

    serializeCountries(countries) {
        // {Country Code: Country...}
        return countries.reduce((acc, country) => {
            acc[country.code] = country;
            return acc
        }, {})
    }

    serializeCities(cities) {
        //{City Name, Country name: }
        return cities.reduce((acc, city) => {
            const country_name = this.getCountryCodeByCityCode(city.country_code);
            const key = `${city.name_translations.en}, ${country_name}`;
            acc[key] = city
            return acc
        }, {})
    }

    getCountryCodeByCityCode(code) {
        return this.countries[code].name_translations.en;
    }

    getCitiesCountryCode(code) {
        return this.cities.filter(city => city.country_code === code);
    }
}

const locations = new Locations(api);

export default locations;