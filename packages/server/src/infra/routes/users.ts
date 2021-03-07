import express from 'express'
import * as UserCreator from './controllers/User/UserCreator'
import * as UserAuthentication from './controllers/User/UserAuthentication/'
import * as SendMail from './controllers/Email/SendMail/'
import * as UserVerify from './controllers/User/UserVerify'

const router = express.Router()

router.post(
  '/create',
  UserCreator.userCreatorValidate.validateEmail,
  UserCreator.userCreatorValidate.validatePassword,
  UserCreator.userCreatorController.create,
  SendMail.sendMailController.sendDevelopment
)

router.post(
  '/auth',
  UserAuthentication.userAuthenticationValidate.validateUserExist,
  UserAuthentication.userAuthenticationController.authenticate
)

router.get(
  '/verify/:id',
  UserVerify.userVerifyValidate.validateUserExist,
  UserVerify.userVerifyController.emailVerify
)

export default router
