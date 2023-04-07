import { combineReducers } from 'redux'
import carsReducer from './cars'

// import stuff from './stuff'

export default combineReducers({
  cars: carsReducer,
  // stuff
})
