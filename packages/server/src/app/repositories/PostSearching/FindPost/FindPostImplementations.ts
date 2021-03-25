import { PostModel } from '@infra/models/Post'
import { IFindPostRepository } from './FindPostRepository'

export class FindPostImplementations implements IFindPostRepository {
  async find(query: object, offset: number) {
    const defaultLimit = 15

    return await PostModel.find({ ...query })
      .limit(defaultLimit)
      .skip(offset)
  }

  async findOne(query: object) {
    return await PostModel.findOne({ ...query })
  }

  async findAndCount(query: object) {
    return await PostModel.find({ ...query }).count()
  }
}
