import { SendMailImplementations } from '@app/repositories/Email/SendMail/SendMailImplementations'
import { SendMailUseCase } from './SendMailUseCase'

const sendMailImplementations = new SendMailImplementations()
const sendMailUseCase = new SendMailUseCase(sendMailImplementations)

export { sendMailUseCase }
