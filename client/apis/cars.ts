import request from 'superagent'
import { Cars, NewCar, UpdateCar } from '../../models/Cars'

const rootUrl = '/api/v1/cars'

export async function getCars(): Promise<Cars[]> {
  const response = await request.get(rootUrl)
  return response.body
}

export async function getCarById(id: number) {
  const response = await request.get(`${rootUrl}` + '/' + `${id}`)
  return response.body
}

export async function addCar(newCar: NewCar[]) {
  const response = await request.post(`${rootUrl}/add`).send(newCar)
  return response.body.cars
}
export async function updateCar(id: number, updateCar: UpdateCar) {
  const response = await request
    .patch(`${rootUrl}` + '/' + `${id}`)
    .send(updateCar)

  return response.body
}

export async function deleteCar(id: number) {
  const response = await request.delete(`${rootUrl}` + '/' + `${id}`)
  return response.body
}
