import { Router } from 'express'

const usersRouter = Router()

usersRouter.get('/route', (req, res) => {
  res.send('Users route')
})

export { usersRouter }
