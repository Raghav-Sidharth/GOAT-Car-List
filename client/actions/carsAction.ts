import { Cars, NewCar, UpdateCar } from '../../models/Cars'
import { addCar, getCars, updateCar, deleteCar } from '../apis/cars'
import type { ThunkAction } from '../store'

// Fetch Cars
export const FETCH_CARS_PENDING = 'FETCH_CARS_PENDING'
export const FETCH_CARS_FULFILLED = 'FETCH_CARS_FULFILLED'
export const FETCH_CARS_REJECTED = 'FETCH_CARS_REJECTED'

// Add Cars
export const ADD_CARS_PENDING = 'ADD_CARS_PENDING'
export const ADD_CARS_FULFILLED = 'ADD_CARS_FULFILLED'
export const ADD_CARS_REJECTED = 'ADD_CARS_REJECTED'

// Update Car
export const UPDATE_CAR_PENDING = 'UPDATE_CAR_PENDING'
export const UPDATE_CAR_FULFILLED = 'UPDATE_CAR_FULFILLED'
export const UPDATE_CAR_REJECTED = 'UPDATE_CAR_REJECTED'

// Delete car
export const DELETE_CAR_PENDING = 'DELETE_CAR_PENDING'
export const DELETE_CAR_FULFILLED = 'DELETE_CAR_FULFILLED'
export const DELETE_CAR_REJECTED = 'DELETE_CAR_REJECTED'

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
  // Add a car
  | {
      type: typeof ADD_CARS_PENDING
      payload: void
    }
  | {
      type: typeof ADD_CARS_FULFILLED
      payload: NewCar[]
    }
  | {
      type: typeof ADD_CARS_REJECTED
      payload: string
    }
  // Update a car
  | {
      type: typeof UPDATE_CAR_PENDING
      payload: void
    }
  | {
      type: typeof UPDATE_CAR_FULFILLED
      payload: UpdateCar
    }
  | {
      type: typeof UPDATE_CAR_REJECTED
      payload: string
    }
  // Delete a car
  | {
      type: typeof DELETE_CAR_PENDING
      payload: void
    }
  | {
      type: typeof DELETE_CAR_FULFILLED
      payload: string
    }
  | {
      type: typeof DELETE_CAR_REJECTED
      payload: string
    }

// Dekete a car
export function deleteCarPending(): CarsAction {
  return {
    type: DELETE_CAR_PENDING,
  } as CarsAction
}

export function deleteCarFulfilled(delCar: string): CarsAction {
  return {
    type: DELETE_CAR_FULFILLED,
    payload: delCar,
  }
}

export function deleteCarRejected(errMessage: string): CarsAction {
  return {
    type: DELETE_CAR_REJECTED,
    payload: errMessage,
  }
}

export function delCar(id: number): ThunkAction {
  return (dispatch) => {
    dispatch(deleteCarPending())
    return deleteCar(id)
      .then(() => {
        dispatch(deleteCarFulfilled('Successfully deleted car'))
      })
      .catch((err) => {
        dispatch(deleteCarRejected(err.message))
      })
  }
}

// Update a car
export function updateCarPending(): CarsAction {
  return {
    type: UPDATE_CAR_PENDING,
  } as CarsAction
}

export function updateCarFulfilled(updCar: UpdateCar): CarsAction {
  return {
    type: UPDATE_CAR_FULFILLED,
    payload: updCar,
  }
}

export function updateCarRejected(errMessage: string): CarsAction {
  return {
    type: UPDATE_CAR_REJECTED,
    payload: errMessage,
  }
}

export function updCar(id: number, car: UpdateCar): ThunkAction {
  return (dispatch) => {
    dispatch(updateCarPending())
    return updateCar(id, car)
      .then((cars) => {
        dispatch(updateCarFulfilled(cars))
      })
      .catch((err) => {
        dispatch(updateCarRejected(err.message))
      })
  }
}

// Add a car
export function addCarsPending(): CarsAction {
  return {
    type: ADD_CARS_PENDING,
  } as CarsAction
}

export function addCarsFulfilled(newCar: NewCar[]): CarsAction {
  return {
    type: ADD_CARS_FULFILLED,
    payload: newCar,
  }
}

export function addCarsRejected(errMessage: string): CarsAction {
  return {
    type: ADD_CARS_REJECTED,
    payload: errMessage,
  }
}

export function addCars(newCar: NewCar[]): ThunkAction {
  return (dispatch) => {
    dispatch(addCarsPending())
    return addCar(newCar)
      .then((cars) => {
        dispatch(addCarsFulfilled(cars))
      })
      .catch((err) => {
        dispatch(addCarsRejected(err.message))
      })
  }
}

// Fetching all cars
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
