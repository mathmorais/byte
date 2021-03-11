import { Router } from 'express'
import { tokenVerifyController } from './controllers/TokenVerify'

const router = Router()

router.get('/verify', tokenVerifyController.verify)

export default router
