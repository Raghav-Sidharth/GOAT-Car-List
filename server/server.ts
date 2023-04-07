import express from 'express'
import path from 'path'
import carsRoute from './routes/cars'
import { resolve } from 'node:path'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/cars', carsRoute)

// default server.use
server.get('*', (req, res) => {
  res.sendFile(resolve('server/public/index.html'))
})

export default server
