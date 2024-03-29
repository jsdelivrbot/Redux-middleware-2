import { FEATCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FEATCH_WEATHER:
    return [ action.payload.data, ...state ]; // [ city, city, city] NOT [ city, [city, city] ]
  }
  return state;
}
