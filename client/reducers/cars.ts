import { Cars } from '../../models/Cars'
import {
  CarsAction,
  FETCH_CARS_FULFILLED,
  FETCH_CARS_PENDING,
  FETCH_CARS_REJECTED,
} from '../actions/carsAction'

interface CarsState {
  data: Cars[] | undefined
  error: string | undefined
  loading: boolean
}

const initialState: CarsState = {
  data: undefined,
  error: undefined,
  loading: false,
}

const carsReducer = (state = initialState, action: CarsAction): CarsState => {
  const { type, payload } = action
  switch (type) {
    // Fetch Cars
    case FETCH_CARS_PENDING:
      return {
        data: undefined,
        error: undefined,
        loading: true,
      }
    case FETCH_CARS_FULFILLED:
      return {
        data: payload,
        error: undefined,
        loading: false,
      }
    case FETCH_CARS_REJECTED:
      return {
        data: undefined,
        error: payload,
        loading: false,
      }
    // Add Cars
    // case ADD_CARS_PENDING:
    //   return {
    //     data: undefined,
    //     error: undefined,
    //     loading: true,
    //   }
    // case ADD_CARS_FULFILLED:
    //   return {
    //     data: payload,
    //     error: undefined,
    //     loading: false,
    //   }
    // case ADD_CARS_REJECTED:
    //   return {
    //     data: undefined,
    //     error: payload,
    //     loading: false,
    //   }
    default:
      return state
  }
}

export default carsReducer
