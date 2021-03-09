import SMTPTransport from 'nodemailer/lib/smtp-transport'

export class MailConfig {
  transportOptions!: SMTPTransport.Options

  sendOptions!: {
    from: string
    to: string
    subject: string
    html: string
  }

  constructor(props: MailConfig) {
    Object.assign(this, props)
  }
}
