import { MailConfig } from '@infra/services/MailConfig'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

export interface ISendMailDTO {
  transportOptions: SMTPTransport.Options
  sendOptions: {
    from: string
    to: string
    subject: string
    html: string
  }
}
