import axios from 'axios';

const API_KEY = 'c33e02d1c0b4eabfd8eba8e58fdd8247';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
 
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // console.log('Request:', request);

    // redux promise. return a promise on payload. redux promise waits for the promise to resolve. sends to reducer
    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
}
