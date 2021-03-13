import { IFindPostRepository } from '@app/repositories/PostSearching/FindPost/FindPostRepository'
import { IFindPostDTO } from './FindPostDTO'

export class FindPostUseCase {
  constructor(private findPostRepository: IFindPostRepository) {}

  async handle({ query }: IFindPostDTO) {
    if (query) return await this.findPostRepository.find(query)

    throw new Error('Missing props on find post')
  }
}
