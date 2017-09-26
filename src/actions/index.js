import axios from 'axios';

const API_KEY = '52b73b5bd5bdd7d96ef3729e31f2bee8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName, countryCode='us'){
    const url = `${ROOT_URL}&q=${cityName},${countryCode}`;
    const request = axios.get(url);
    console.log('Request: ', request);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}