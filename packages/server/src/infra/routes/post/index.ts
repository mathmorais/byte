import { Router } from 'express'
import {
  postCreatorController,
  postCreatorValidate,
} from './controllers/PostCreator'
import { postSearchingController } from './controllers/PostSearching'

const router = Router()

router.post(
  '/create',
  postCreatorValidate.validateCredentials,
  postCreatorController.create
)

router.get('/search/all', postSearchingController.searchAll)

router.get('/search/:id', postSearchingController.searchOne)

export default router
