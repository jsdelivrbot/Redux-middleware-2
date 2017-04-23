import axios from 'axios';

const API_KEY = 'ca48c0670ad1f12ebd212d6f2bc758ec';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FEATCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FEATCH_WEATHER,
    payload: request
  };
}
