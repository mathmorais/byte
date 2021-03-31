import { PostUpdateController } from './PostUpdateController'
import { PostUpdateValidator } from './PostUpdateValidator'

const postUpdateController = new PostUpdateController()
const postUpdateValidator = new PostUpdateValidator()

export { postUpdateController, postUpdateValidator }
