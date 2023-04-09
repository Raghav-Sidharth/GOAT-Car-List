import { useAppDispatch } from '../hooks/hooks'
import { useNavigate, useParams } from 'react-router-dom'
import { FormEvent, useEffect, useState } from 'react'
import { updCar } from '../actions/carsAction'
import { getCarById } from '../apis/cars'

export default function UpdateCar() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const carId = Number(params.id)

  const [updatedCar, setUpdatedCar] = useState({
    id: carId,
    manufacturer: '',
    model: '',
    year: '',
    cost: '',
    imageUrl: '',
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const id = Number(params.id)
    dispatch(updCar(id, updatedCar))
    navigate('/')
  }
  useEffect(() => {
    const fetchCar = async () => {
      const car = await getCarById(carId)
      setUpdatedCar(car)
      console.log(car)
    }
    fetchCar().catch(console.error)
  }, [carId])

  return (
    <>
      <div>
        <div className="titleUpdateCar">
          <h3>Update This Car</h3>
        </div>
        <div className="updImg">
          <img
            className="updCar"
            src={updatedCar.imageUrl}
            alt={updatedCar.manufacturer + ' ' + updatedCar.model}
          />
        </div>
        <form onSubmit={handleSubmit} className="updateCar">
          <div className="formDiv">
            <label htmlFor="Who manufactured this car? ">
              {' '}
              Manufacturer
              <input
                type="text"
                value={updatedCar.manufacturer}
                id="manufacturer"
                name="manufacturer"
                placeholder="Who manufactured this car?"
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, manufacturer: e.target.value })
                }
              />
            </label>
          </div>
          <div className="formDiv">
            <label htmlFor="What is the model of this car?">
              {' '}
              Model
              <input
                type="text"
                value={updatedCar.model}
                id="model"
                name="model"
                placeholder="What is the model of this car?"
                required
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, model: e.target.value })
                }
              />
            </label>
          </div>
          <div className="formDiv">
            <label htmlFor="Which year was this car available for sale?">
              {' '}
              Release Year
              <input
                type="text"
                value={updatedCar.year}
                id="year"
                name="year"
                placeholder="Which year was this car available for sale?"
                required
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, year: e.target.value })
                }
              />
            </label>
          </div>
          <div className="formDiv">
            <label htmlFor="What is the cost of this car?">
              {' '}
              Cost
              <input
                type="text"
                value={updatedCar.cost}
                id="cost"
                name="cost"
                placeholder="What is the cost of this car?"
                required
                onChange={(e) =>
                  setUpdatedCar({ ...updatedCar, cost: e.target.value })
                }
              />
            </label>
          </div>
          <div className="buttonDiv">
            <button type="submit">Update this Car</button>
          </div>
        </form>
      </div>
    </>
  )
}
