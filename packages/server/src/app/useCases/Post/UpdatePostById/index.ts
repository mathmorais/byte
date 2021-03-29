import { UpdatePostImplementations } from '@app/repositories/Post/UpdatePost/UpdatePostImplementations'
import { UpdatePostByIdUseCase } from './UpdatePostUseCase'

const updatePostImplementations = new UpdatePostImplementations()
const updatePostByIdUseCase = new UpdatePostByIdUseCase(
  updatePostImplementations
)

export { updatePostByIdUseCase }
