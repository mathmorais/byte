import { CreateUserImplementations } from '@app/repositories/User/CreateUser/CreateUserImplementations'
import { CreateUserUseCase } from './CreateUserUseCase'

const createUserImplementations = new CreateUserImplementations()
const createUserUseCase = new CreateUserUseCase(createUserImplementations)

export { createUserUseCase }
