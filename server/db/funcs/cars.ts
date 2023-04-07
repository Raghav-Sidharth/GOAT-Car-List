import connection from '../connection'
import { Cars } from '../../../models/Cars'

export function getCars(db = connection): Promise<Cars[]> {
  return db('cars').select()
}
