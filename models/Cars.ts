export interface Cars {
  id: number
  manufacturer: string
  model: string
  year: string
  cost: string
  imageUrl: string
}

export interface NewCar extends Partial<Cars> {
  id?: number
}

export interface UpdateCar extends Partial<Cars> {
  manufacturer: string
  model: string
  year: string
  cost: string
}
