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

export async function addCar(newCar: NewCar) {
  await request.post(`${rootUrl}/add`).send(newCar)
}
export async function updateCar(id: number, updateCar: UpdateCar) {
  await request.patch(`${rootUrl}` + '/' + `${id}`).send(updateCar)
}

export async function deleteCar(id: number) {
  await request.delete(`${rootUrl}/${id}`)
}
