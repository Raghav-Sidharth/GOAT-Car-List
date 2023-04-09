import { Router } from 'express'
import { getCars, updateCar } from '../db/funcs/cars'
import { addCar } from '../db/funcs/cars'

const router = Router()

export default router

// GET /results
router.get('/', async (req, res) => {
  try {
    const cars = await getCars()
    res.json(cars)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

// POST to DB and redirect to home page
router.post('/add', async (req, res) => {
  try {
    const newCar = req.body
    await addCar(newCar)
    res.redirect('/')
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

//PATCH update a car based on it's id

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const car = req.body
    await updateCar(id, car)
    res.redirect('/')
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})
