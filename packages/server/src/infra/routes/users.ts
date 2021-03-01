import { Router } from 'express'
import { UserCreator } from './controllers/UserCreator'
import { UserCreatorValidate } from './controllers/UserCreatorValidate'

const usersRouter = Router()
const userCreator = new UserCreator()
const userCreatorValidate = new UserCreatorValidate()

usersRouter.post(
  '/create',
  userCreatorValidate.validateEmail,
  userCreatorValidate.validatePassword,
  userCreator.create
)

export { usersRouter }
