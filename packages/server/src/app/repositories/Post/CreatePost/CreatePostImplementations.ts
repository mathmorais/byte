import { PostModel } from '@infra/models/Post'
import {
  ICreatePostRepository,
  ICreatePostCredentials,
} from './CreatePostRepository'

export class CreatePostImplementations implements ICreatePostRepository {
  async create(credentials: ICreatePostCredentials) {
    await PostModel.create(credentials)
  }
}
