import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchCars, delCar } from '../actions/carsAction'

import { Link } from 'react-router-dom'

export default function Cars() {
  const cars = useAppSelector((state) => state.cars)
  const dispatch = useAppDispatch()

  function handleDelete(id: number) {
    dispatch(delCar(id))
    // window.location.reload()
  }

  useEffect(() => {
    dispatch(fetchCars())
  }, [dispatch])
  console.log(cars.data)
  return (
    <>
      <div className="carsHeader">
        <h2>Here are the cars</h2>
      </div>
      <div>
        {cars.loading && <p>Please wait while we load your cars</p>}
        {cars.error && <p>{cars.error}</p>}
      </div>
      <div className="cars">
        {cars.data ? (
          cars.data.length !== 0 ? (
            cars.data.map((data) => {
              return (
                <div key={data.id} className="carsData">
                  <img
                    className="carsImg"
                    src={data.imageUrl}
                    alt={data.manufacturer + ' ' + data.model}
                  />

                  <div>
                    <p>
                      {data.year + ' ' + data.manufacturer + ' ' + data.model}
                    </p>

                    <p>Cost: USD ${data.cost}</p>
                    <Link to={`/${data.id}`}>
                      {' '}
                      Something wrong? Update this car!
                    </Link>
                    <br />
                    <div className="buttonCarsList">
                      <button
                        type="submit"
                        onClick={() => handleDelete(data.id)}
                      >
                        Delete this Car
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <h1>No Data</h1>
          )
        ) : (
          <h1>no Data</h1>
        )}
      </div>
    </>
  )
}
