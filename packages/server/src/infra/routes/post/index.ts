import { Router } from 'express'
import {
  postCreatorController,
  postCreatorValidate,
} from './controllers/PostCreator'
import { postSearchingController } from './controllers/PostSearching'

const router = Router()

router.post(
  '/create',
  postCreatorValidate.validateToken,
  postCreatorValidate.validateCredentials,
  postCreatorController.create
)

router.get('/search/all', postSearchingController.search)

router.get('/search/:id', postSearchingController.searchOne)

router.get('/search', postSearchingController.searchFilter)

export default router
