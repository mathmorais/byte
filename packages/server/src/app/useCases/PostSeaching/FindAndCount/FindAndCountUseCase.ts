import { IFindPostRepository } from '@app/repositories/PostSearching/FindPost/FindPostRepository'
import { IFindAndCountDTO } from './FindAndCountDTO'

export class FindAndCountUseCase {
  constructor(private findPostRepository: IFindPostRepository) {}

  async handle({ query }: IFindAndCountDTO) {
    if (query) return await this.findPostRepository.findAndCount(query)

    throw new Error('Missing query on FindAndCount')
  }
}
