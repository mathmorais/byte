import express from 'express'
import cors from 'cors'
import { apiRouter } from '../routes'

const app = express()
const corsConfig = { credentials: true, origin: 'http://localhost:3000' }

app.use(cors(corsConfig), express.json())
app.use('/api', apiRouter)

export { app }
