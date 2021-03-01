import { Router } from 'express'

const postRouter = Router()

postRouter.get('/route', (req, res) => {
  res.send('Posts route')
})

export { postRouter }
