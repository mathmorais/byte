import { ICreatePostRepository } from '@app/repositories/Post/CreatePost/CreatePostRepository'
import { ICreatePostDTO } from './CreatePostDTO'

export class CreatePostUseCase {
  constructor(private createPostRepository: ICreatePostRepository) {}

  async handle(credentials: ICreatePostDTO) {
    if (credentials) return await this.createPostRepository.create(credentials)
    throw new Error('Missing credentials properties')
  }
}
