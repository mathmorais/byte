import { Router } from 'express'
import {
  postCreatorController,
  postCreatorValidate,
} from './controllers/PostCreator'
import { postSearchingController } from './controllers/PostSearching'
import { postUpdateController } from './controllers/PostUpdate'

const router = Router()

router.post(
  '/create',
  postCreatorValidate.validateToken,
  postCreatorValidate.validateCredentials,
  postCreatorController.create
)

router.post('/update/views/:id', postUpdateController.updateViews)

router.post('/update/comments/:id', postUpdateController.updateComments)

router.get('/search', postSearchingController.search)

router.get('/search/count', postSearchingController.searchAndCount)

router.get('/search/one', postSearchingController.searchOne)

router.get('/search/filter', postSearchingController.searchFilter)

export default router
