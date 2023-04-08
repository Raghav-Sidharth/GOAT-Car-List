import { useAppDispatch } from '../hooks/hooks'
import { useNavigate } from 'react-router-dom'

import { FormEvent, useState } from 'react'
import { addCars } from '../actions/carsAction'

export default function AddCar() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [newCar, setNewCar] = useState({
    manufacturer: '',
    model: '',
    year: '',
    cost: '',
    imageUrl: '',
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    dispatch(addCars([newCar]))
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="addCar">
      <div>
        <label htmlFor="Who manufactured this car? ">
          {' '}
          Manufacturer
          <input
            type="text"
            id="manufacturer"
            name="manufacturer"
            placeholder="Who manufactured this car?"
            required
            onChange={(e) =>
              setNewCar({ ...newCar, manufacturer: e.target.value })
            }
          />
        </label>
      </div>

      <label htmlFor="What is the model of this car?">
        {' '}
        Model
        <input
          type="text"
          id="model"
          name="model"
          placeholder="What is the model of this car?"
          required
          onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
        />
      </label>
      <label htmlFor="Which year was this car available for sale?">
        {' '}
        Release Year
        <input
          type="text"
          id="year"
          name="year"
          placeholder="Which year was this car available for sale?"
          required
          onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
        />
      </label>
      <label htmlFor="What is the cost of this car?">
        {' '}
        Cost
        <input
          type="text"
          id="cost"
          name="cost"
          placeholder="What is the cost of this car?"
          required
          onChange={(e) => setNewCar({ ...newCar, cost: e.target.value })}
        />
      </label>
      <label htmlFor="Please provide a link to an image of this car.">
        Image Link
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          placeholder="Please provide a link to an image of this car."
          required
          onChange={(e) => setNewCar({ ...newCar, imageUrl: e.target.value })}
        />
      </label>
      <button type="submit">Add your Car</button>
    </form>
  )
}
