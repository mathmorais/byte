import {
  IUpdateByIdProps,
  IUpdateUserByIdRepository,
} from './UpdateUserByIdRepository'
import { UserModel } from '@infra/models/User'

export class UpdateUserByIdImplementations
  implements IUpdateUserByIdRepository {
  async updateById(props: IUpdateByIdProps) {
    await UserModel.findByIdAndUpdate(props.id, { ...props.query })
  }
}
