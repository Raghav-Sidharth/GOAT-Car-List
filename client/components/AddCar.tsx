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
    dispatch(addCars(newCar))
    console.log('New Car', newCar)
    setNewCar({ manufacturer: '', model: '', year: '', cost: '', imageUrl: '' })
    navigate('/')
  }

  return (
    <>
      <div className="addACar">
        <h2>Add a Car</h2>
      </div>
      <form onSubmit={handleSubmit} className="addCar">
        <div className="formDiv">
          <label htmlFor="manufacturer" aria-label="Who manufactured this car?">
            {' '}
            Manufacturer
            <input
              type="text"
              id="manufacturer"
              name="manufacturer"
              placeholder="Who manufactured this car?"
              required
              value={newCar.manufacturer}
              onChange={(e) =>
                setNewCar({ ...newCar, manufacturer: e.target.value })
              }
            />
          </label>
        </div>
        <div className="formDiv">
          <label htmlFor="model" aria-label="What is the model of this car?">
            {' '}
            Model
            <input
              type="text"
              id="model"
              name="model"
              placeholder="What is the model of this car?"
              required
              value={newCar.model}
              onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
            />
          </label>
        </div>
        <div className="formDiv">
          <label
            htmlFor="year"
            aria-label="Which year was this car available for sale?"
          >
            {' '}
            Release Year
            <input
              type="text"
              id="year"
              name="year"
              placeholder="Which year was this car available for sale?"
              required
              value={newCar.year}
              onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
            />
          </label>
        </div>
        <div className="formDiv">
          <label htmlFor="cost" aria-label="What is the cost of this car?">
            {' '}
            Cost
            <input
              type="text"
              id="cost"
              name="cost"
              placeholder="What is the cost of this car?"
              value={newCar.cost}
              required
              onChange={(e) => setNewCar({ ...newCar, cost: e.target.value })}
            />
          </label>
        </div>
        <div className="formDiv">
          <label
            htmlFor="imageUrl"
            aria-label="Please provide a link to an image of this car."
          >
            Image Link
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              placeholder="Please provide a link to an image of this car."
              required
              value={newCar.imageUrl}
              onChange={(e) =>
                setNewCar({ ...newCar, imageUrl: e.target.value })
              }
            />
          </label>
        </div>
        <div className="buttonDiv">
          <button type="submit">Add your Car</button>
        </div>
      </form>
    </>
  )
}
