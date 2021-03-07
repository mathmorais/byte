import { UserAuthenticationController } from './UserAuthenticationController'
import { UserAuthenticationValidate } from './UserAuthenticationValidate'

const userAuthenticationValidate = new UserAuthenticationValidate()
const userAuthenticationController = new UserAuthenticationController()

export { userAuthenticationController, userAuthenticationValidate }
