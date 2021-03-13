import { FindPostImplementations } from '@app/repositories/PostSearching/FindPost/FindPostImplementations'
import { FindPostUseCase } from './FindPostUseCase'

const findPostImplementations = new FindPostImplementations()
const findPostUseCase = new FindPostUseCase(findPostImplementations)

export { findPostUseCase }
