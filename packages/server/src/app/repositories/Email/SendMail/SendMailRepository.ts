import { Mail } from '@domain/entities/Mail'
import { SentMessageInfo, TestAccount, Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

export interface ISendMailRespository {
  createTransport(
    props: SMTPTransport.Options | TestAccount
  ): Promise<Transporter>
  send(transport: Transporter, sendOptions: Mail): Promise<SentMessageInfo>
}
