import key from '../config.json';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${key.WEATHER_API_KEY}`

import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const URL = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(URL);

	return{
		type: 'FETCH_WEATHER',
		payload: request
	};
}