import { FindUserUseCase } from './FindUserUseCase'
import { FindUserImplementations } from '@app/repositories/UserSeaching/FindUser/FindUserImplementations'

const findUserImplementations = new FindUserImplementations()
const findUserUseCase = new FindUserUseCase(findUserImplementations)

export { findUserUseCase }
