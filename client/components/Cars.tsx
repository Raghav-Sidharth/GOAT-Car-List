import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchCars } from '../actions/carsAction'

export default function Cars() {
  const cars = useAppSelector((state) => state.cars)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCars())
  }, [])
  return (
    <>
      <div>
        <h3>Here are your Cars</h3>
      </div>
      <div>
        {cars.loading && <p>Please wait while we load your cars</p>}
        {cars.error && <p>{cars.error}</p>}
      </div>
      <div>
        {cars.data ? (
          cars.data.length !== 0 ? (
            cars.data.map((data) => {
              return (
                <div key={data.id}>
                  <h4>{data.model}</h4>
                  <img
                    src={data.imageUrl}
                    alt={data.manufacturer + ' ' + data.model}
                  />
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
