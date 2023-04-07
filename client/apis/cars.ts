import request from 'superagent'
import { Cars } from '../../models/Cars'

const rootUrl = '/api/v1/cars'

export async function getCars(): Promise<Cars[]> {
  const response = await request.get(rootUrl)
  return response.body
}
