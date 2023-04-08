import connection from '../connection'
import { Cars, NewCar } from '../../../models/Cars'

export function getCars(db = connection): Promise<Cars[]> {
  return db('cars').select()
}

export function addCar(newCar: NewCar, db = connection) {
  return db('cars').insert(newCar)
}

export function updateCar(id: number, car: Cars, db = connection) {
  return db('cars').update(car).where('id', id)
}
