import { CreatePostImplementations } from '@app/repositories/Post/CreatePost/CreatePostImplementations'
import { CreatePostUseCase } from './CreatePostUseCase'

const createPostImplementations = new CreatePostImplementations()
const createPostUseCase = new CreatePostUseCase(createPostImplementations)

export { createPostUseCase }
