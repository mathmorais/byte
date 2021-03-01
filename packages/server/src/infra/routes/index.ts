import { Router } from 'express'
import { postRouter } from './posts'
import { usersRouter } from './users'

const apiRouter = Router()

apiRouter.use('/posts', postRouter)
apiRouter.use('/users', usersRouter)

export { apiRouter }
