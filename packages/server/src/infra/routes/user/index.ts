import express from 'express'
import {
  userCreatorController,
  userCreatorValidate,
} from './controllers/UserCreator'
import {
  userAuthenticationController,
  userAuthenticationValidate,
} from './controllers/UserAuthentication/'
import {
  userVerifyController,
  userVerifyValidate,
} from './controllers/UserVerify'
import { sendMailController } from '@infra/services/email/SendMail'

const router = express.Router()

router.post(
  '/create',
  userCreatorValidate.validateEmail,
  userCreatorValidate.validatePassword,
  userCreatorController.create,
  sendMailController.sendDevelopment
)

router.post(
  '/auth',
  userAuthenticationValidate.validateUserExist,
  userAuthenticationController.authenticate
)

router.get(
  '/verify/:id',
  userVerifyValidate.validateUserExist,
  userVerifyController.emailVerify
)

export default router
