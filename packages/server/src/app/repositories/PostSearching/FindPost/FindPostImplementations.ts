import { PostModel } from '@infra/models/Post'
import { IFindPostRepository } from './FindPostRepository'

export class FindPostImplementations implements IFindPostRepository {
  async find(query: object) {
    return await PostModel.find({ ...query })
  }
}
