import { ISendMailRespository } from '@app/providers/Email/SendMail/SendMailRepository'
import { ISendMailDTO } from './SendMailDTO'

export class SendMailUseCase {
  constructor(private sendMailRespository: ISendMailRespository) {}

  async handle({ sendOptions, transportOptions }: ISendMailDTO) {
    const tranporter = await this.sendMailRespository.createTransport(
      transportOptions
    )
    return await this.sendMailRespository.send(tranporter, sendOptions)
  }
}
