import { TokenVerifyImplementations } from '@app/repositories/Token/TokenVerify/TokenVerifyImplementations'
import { TokenVerifyUseCase } from './TokenVerifyUseCase'

const tokenVerifyImplementations = new TokenVerifyImplementations()
const tokenVerifyUseCase = new TokenVerifyUseCase(tokenVerifyImplementations)

export { tokenVerifyUseCase }
