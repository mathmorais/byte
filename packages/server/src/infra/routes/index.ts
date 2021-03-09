import { Router } from 'express'
import postRouter from './post'
import usersRouter from './user'
import tokenRoute from './token'

const apiRouter = Router()

apiRouter.use('/posts', postRouter)
apiRouter.use('/users', usersRouter)
apiRouter.use('/token', tokenRoute)

export { apiRouter }
