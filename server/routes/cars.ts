import { Router } from 'express'
import { getCars } from '../db/funcs/cars'
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
