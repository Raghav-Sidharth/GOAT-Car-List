import { useAppDispatch } from '../hooks/hooks'
import { useNavigate, useParams } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { updCar } from '../actions/carsAction'

export default function UpdateCar() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const [updatedCar, setUpdatedCar] = useState({
    manufacturer: '',
    model: '',
    year: '',
    cost: '',
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const id = Number(params)
    dispatch(updCar(id, updatedCar))
    console.log(updatedCar)
    navigate('/')
  }
  return (
    <>
      <p>Something wrong? Update this car!</p>
      <form onSubmit={handleSubmit} className="updateCar">
        <label htmlFor="Who manufactured this car? ">
          {' '}
          Manufacturer
          <input
            type="text"
            id="manufacturer"
            name="manufacturer"
            placeholder="Who manufactured this car?"
            onChange={(e) =>
              setUpdatedCar({ ...updatedCar, manufacturer: e.target.value })
            }
          />
        </label>

        <label htmlFor="What is the model of this car?">
          {' '}
          Model
          <input
            type="text"
            id="model"
            name="model"
            placeholder="What is the model of this car?"
            required
            onChange={(e) =>
              setUpdatedCar({ ...updatedCar, model: e.target.value })
            }
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
            onChange={(e) =>
              setUpdatedCar({ ...updatedCar, year: e.target.value })
            }
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
            onChange={(e) =>
              setUpdatedCar({ ...updatedCar, cost: e.target.value })
            }
          />
        </label>

        <button type="submit">Update this Car</button>
      </form>
    </>
  )
}
