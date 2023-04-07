import { Cars } from '../../models/Cars'
import { getCars } from '../apis/cars'
import type { ThunkAction } from '../store'

export const FETCH_CARS_PENDING = 'FETCH_CARS_PENDING'
export const FETCH_CARS_FULFILLED = 'FETCH_CARS_FULFILLED'
export const FETCH_CARS_REJECTED = 'FETCH_CARS_REJECTED'

export type CarsAction =
  | {
      type: typeof FETCH_CARS_PENDING
      payload: void
    }
  | {
      type: typeof FETCH_CARS_FULFILLED
      payload: Cars[]
    }
  | {
      type: typeof FETCH_CARS_REJECTED
      payload: string
    }

export function fetchCarsPending(): CarsAction {
  return {
    type: FETCH_CARS_PENDING,
  } as CarsAction
}

export function fetchCarsFulfilled(results: Cars[]): CarsAction {
  return {
    type: FETCH_CARS_FULFILLED,
    payload: results,
  }
}

export function fetchCarsRejected(errMessage: string): CarsAction {
  return {
    type: FETCH_CARS_REJECTED,
    payload: errMessage,
  }
}

export function fetchCars(): ThunkAction {
  return (dispatch) => {
    dispatch(fetchCarsPending())
    return getCars()
      .then((cars) => {
        dispatch(fetchCarsFulfilled(cars))
      })
      .catch((err) => {
        dispatch(fetchCarsRejected(err.message))
      })
  }
}
