import { UpdateUserByIdImplementations } from '@app/repositories/User/UpdateUserById/UpdateUserByIdImplementations'
import { UpdateUserByIdUseCase } from './UpdateUserByIdUseCase'

const updateUserByIdImplementations = new UpdateUserByIdImplementations()
const updateUserByIdUseCase = new UpdateUserByIdUseCase(
  updateUserByIdImplementations
)

export { updateUserByIdUseCase }
