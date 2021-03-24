import { IFindPostRepository } from '@app/repositories/PostSearching/FindPost/FindPostRepository'
import { IFindPostDTO } from './FindPostDTO'

export class FindPostUseCase {
  constructor(private findPostRepository: IFindPostRepository) {}

  async handle(props: IFindPostDTO) {
    if (props.query)
      return await this.findPostRepository.find(props.query, props.offset)

    throw new Error('Missing props on find post')
  }
}
