import { Router } from 'express'
import { UserCreatorController } from './controllers/UserCreator/UserCreatorController'
import { UserCreatorValidateController } from './controllers/UserCreator/UserCreatorValidateController'
import { UserAuthenticatioController } from './controllers/UserAuthentication/UserAuthenticationController'
import { UserAuthenticationValidateController } from './controllers/UserAuthentication/UserAuthenticationValidateController'

const usersRouter = Router()

const userCreator = new UserCreatorController()
const userCreatorValidate = new UserCreatorValidateController()

const userAuthentication = new UserAuthenticatioController()
const userAuthenticationValidate = new UserAuthenticationValidateController()

usersRouter.post(
  '/create',
  userCreatorValidate.validatePassword,
  userCreatorValidate.validateEmail,
  userCreator.create
)

usersRouter.post(
  '/auth',
  userAuthenticationValidate.validateUserExist,
  userAuthentication.authenticate
)

export { usersRouter }
