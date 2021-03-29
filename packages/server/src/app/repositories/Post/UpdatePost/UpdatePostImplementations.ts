import { PostModel } from '@infra/models/Post'
import { IUpdatePostRepository, IUpdateByIdProps } from './UpdatePostRepository'

export class UpdatePostImplementations implements IUpdatePostRepository {
  async updateById(props: IUpdateByIdProps) {
    await PostModel.findByIdAndUpdate(props.id, props.query)
  }
}
