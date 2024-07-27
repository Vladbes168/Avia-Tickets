import axios from 'axios';
import config from '../config/apiConfig';

/**
 * /Countries - array of countries
 * /Cities - array of cities
 * /Prices/Cheap - array available trips
 */

class Api {
    constructor(config) {
        this.url = config.url;
    }
    async countries() {
        try {
            const response = await axios.get(`${this.url}/countries`)
            return response.data
        } catch(err) {
            console.log(err);
            return Promise.reject(err);
        }
    }
    async cities() {
        try {
            const response = await axios.get(`${this.url}/cities`)
            return response.data
        } catch(err) {
            console.log(err);
            return Promise.reject(err);
        }
    }
     async prices(params) {}
}

const api = new Api(config);

export default api;