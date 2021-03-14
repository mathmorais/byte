import { FindPostImplementations } from '@app/repositories/PostSearching/FindPost/FindPostImplementations'
import { FindOnePostUseCase } from './FindOnePostUseCase'

const findPostImplementations = new FindPostImplementations()
const findOnePostUseCase = new FindOnePostUseCase(findPostImplementations)

export { findOnePostUseCase }
