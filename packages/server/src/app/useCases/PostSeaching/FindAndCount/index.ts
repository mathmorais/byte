import { FindPostImplementations } from '@app/repositories/PostSearching/FindPost/FindPostImplementations'
import { FindAndCountUseCase } from './FindAndCountUseCase'

const findPostImplementations = new FindPostImplementations()

const findAndCountUseCase = new FindAndCountUseCase(findPostImplementations)

export { findAndCountUseCase }
