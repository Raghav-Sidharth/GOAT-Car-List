import connection from '../connection'
import { Cars, NewCar, UpdateCar } from '../../../models/Cars'

export function getCars(db = connection): Promise<Cars[]> {
  return db('cars').select()
}

export function getCarById(id: number, db = connection): Promise<Cars[]> {
  return db('cars').where('id', id).first()
}

export function addCar(newCar: NewCar, db = connection) {
  return db('cars').insert(newCar)
}

export function updateCar(id: number, car: UpdateCar, db = connection) {
  return db('cars').where('id', id).update(car)
}

export function deleteCar(id: number, db = connection) {
  return db('cars').where('id', id).del()
}
