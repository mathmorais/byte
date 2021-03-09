import { Router } from 'express'
import {
  postCreatorController,
  postCreatorValidate,
} from './controllers/PostCreator'

const router = Router()

router.post(
  '/create',
  postCreatorValidate.validateCredentials,
  postCreatorController.create
)

export default router
