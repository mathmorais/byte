import { Mail } from '@domain/entities/Mail'
import nodemailer, { SentMessageInfo, Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

import { ISendMailRespository } from './SendMailRepository'

export class SendMailImplementations implements ISendMailRespository {
  async createTransport(props: SMTPTransport.Options) {
    const hasTheAuthProperty = props.auth !== null

    if (hasTheAuthProperty) {
      const transporter = nodemailer.createTransport({
        ...props,
      })
      return transporter
    }

    throw new Error('Missing authentication argument')
  }
  async send(transport: Transporter, { from, subject, to, html }: Mail) {
    if (transport) {
      const info = await transport.sendMail({
        from,
        to,
        subject,
        html,
      })

      return info
    }

    throw new Error('Missing transporter argument')
  }
}
