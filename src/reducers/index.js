import { combineReducers } from 'redux';
import WeatherReducert from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherReducert
});

export default rootReducer;
