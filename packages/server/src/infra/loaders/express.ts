import express from 'express'
import cors from 'cors'
import { apiRouter } from '../routes'

const app = express()

app.use(express.json(), cors())
app.use('/api', apiRouter)

export { app }
