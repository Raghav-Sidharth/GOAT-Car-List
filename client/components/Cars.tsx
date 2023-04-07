import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchCars } from '../actions/carsAction'

export default function Cars() {
  const cars = useAppSelector((state) => state.cars)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCars())
  }, [dispatch])
  return (
    <>
      <div className="carsHeader">
        <h3>Here are your Cars</h3>
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
