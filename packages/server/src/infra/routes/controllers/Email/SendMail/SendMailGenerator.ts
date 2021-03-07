import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { MailConfig } from '@infra/services/MailConfig'
import { compile } from 'handlebars'
import path from 'path'
import fileSystem from 'fs'

interface ITransportConfig {
  smtp: {
    port: number
    secure: boolean
    host: string
  }
  user: string
  pass: string
}

interface IHTMLProps {
  fileVariables: object
  fileName: string
}

export class SendMailGenerator {
  generateHtmlBody(props: IHTMLProps) {
    const filePath = path.resolve(
      __dirname,
      `../../../../views/email/${props.fileName}`
    )
    const fileContent = fileSystem.readFileSync(filePath).toString()

    const template = compile(fileContent)
    return template(props.fileVariables)
  }

  generateConfiguredMail(props: MailConfig) {
    const options = {
      ...props,
    }

    const configuredMail = new MailConfig(options)

    return configuredMail
  }

  generateMailTrasport(props: ITransportConfig): SMTPTransport.Options {
    return {
      host: props.smtp.host,
      port: props.smtp.port,
      secure: props.smtp.secure,
      auth: {
        user: props.user,
        pass: props.pass,
      },
    }
  }
}
