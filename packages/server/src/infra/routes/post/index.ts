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

router.get('/search', postSearchingController.search)

router.get('/search/count', postSearchingController.searchAndCount)

router.get('/search/one', postSearchingController.searchOne)

router.get('/search/filter', postSearchingController.searchFilter)

export default router
