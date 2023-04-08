import request from 'superagent'
import { Cars, NewCar } from '../../models/Cars'

const rootUrl = '/api/v1/cars'

export async function getCars(): Promise<Cars[]> {
  const response = await request.get(rootUrl)
  return response.body
}

export async function addCar(newCar: NewCar[]) {
  const response = await request.post(`${rootUrl}/add`).send(newCar)
  return response.body.cars
}
