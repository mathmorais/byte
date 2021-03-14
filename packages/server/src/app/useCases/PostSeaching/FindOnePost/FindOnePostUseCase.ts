import { IFindPostRepository } from '@app/repositories/PostSearching/FindPost/FindPostRepository'
import { IFindOnePostDTO } from './FindOnePostDTO'

export class FindOnePostUseCase {
  constructor(private findPostRepository: IFindPostRepository) {}

  async handle({ query }: IFindOnePostDTO) {
    if (query) return await this.findPostRepository.findOne(query)

    throw new Error('Missing props on find post')
  }
}
