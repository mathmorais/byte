import {
  IUpdatePostRepository,
  IUpdateByIdProps,
} from '@app/repositories/Post/UpdatePost/UpdatePostRepository'

export class UpdatePostByIdUseCase {
  constructor(private updatePostRepository: IUpdatePostRepository) {}

  async handle(props: IUpdateByIdProps) {
    if (props.id) return await this.updatePostRepository.updateById(props)

    throw new Error('Missing query on update')
  }
}
