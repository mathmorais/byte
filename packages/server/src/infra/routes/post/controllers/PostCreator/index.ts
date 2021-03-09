import { PostCreatorController } from './PostCreatorController'
import { PostCreatorValidate } from './PostCreatorValidate'

const postCreatorValidate = new PostCreatorValidate()
const postCreatorController = new PostCreatorController()

export { postCreatorValidate, postCreatorController }
