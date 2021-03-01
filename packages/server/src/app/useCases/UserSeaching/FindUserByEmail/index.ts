import { FindUserByEmailUseCase } from './FindUserByEmailUseCase'
import { FindUserByEmailImplementations } from '@app/repositories/UserSeaching/FindUserByEmail/FindUserByEmailImplementations'

const findUserByEmailImplementations = new FindUserByEmailImplementations()
const findUserByEmailUseCase = new FindUserByEmailUseCase(
  findUserByEmailImplementations
)

export { findUserByEmailUseCase }
