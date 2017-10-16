const API_KEY = '639c81fd06d4eca517d55159c58da91a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

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