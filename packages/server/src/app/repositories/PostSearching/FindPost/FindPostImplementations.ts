import { PostModel } from '@infra/models/Post'
import { IFindPostRepository } from './FindPostRepository'

export class FindPostImplementations implements IFindPostRepository {
  async find(query: object, offset: number) {
    const defaultLimit = 15
    const currentOffset = offset ?? 0

    return await PostModel.find({ ...query })
      .limit(defaultLimit)
      .skip(currentOffset)
  }

  async findOne(query: object) {
    return await PostModel.findOne({ ...query })
  }
}
