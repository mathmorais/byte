import { Router } from 'express'
import { UserCreatorController } from './controllers/User/UserCreator/UserCreatorController'
import { UserCreatorValidateController } from './controllers/User/UserCreator/UserCreatorValidateController'
import { SendMailController } from './controllers/Email/SendMail/SendMailController'
import { UserAuthenticatioController } from './controllers/User/UserAuthentication/UserAuthenticationController'
import { UserAuthenticationValidateController } from './controllers/User/UserAuthentication/UserAuthenticationValidateController'

const isOnDevelopmentEnviroment = process.env.NODE_ENV === 'dev'
const usersRouter = Router()

const userCreator = new UserCreatorController()
const userCreatorValidate = new UserCreatorValidateController()

const userAuthentication = new UserAuthenticatioController()
const userAuthenticationValidate = new UserAuthenticationValidateController()
const sendMailController = new SendMailController()

usersRouter.post(
  '/create',
  userCreatorValidate.validatePassword,
  userCreatorValidate.validateEmail,
  userCreator.create,
  isOnDevelopmentEnviroment
    ? sendMailController.sendDevelopment
    : sendMailController.send
)

usersRouter.post(
  '/auth',
  userAuthenticationValidate.validateUserExist,
  userAuthentication.authenticate
)

export { usersRouter }
