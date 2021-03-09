import { createTestAccount } from 'nodemailer'
import { sendMailUseCase } from '@app/useCases/Email/SendMail'
import { Request, Response } from 'express'
import { ISendMailRequestDTO } from './SendMailRequestDTO'
import { config } from '@infra/config'
import { SendMailGenerator } from './SendMailGenerator'
import { findUserUseCase } from '@app/useCases/UserSeaching/FindUser'

export class SendMailController extends SendMailGenerator {
  private getUserId = async (email: string) => {
    const user = await findUserUseCase.handle({
      query: { email },
    })

    return user!.id
  }

  sendDevelopment = async (req: Request, res: Response) => {
    const crendetials: ISendMailRequestDTO = req.body

    res.status(201).send({
      message: 'Created',
    })

    const findedId = await this.getUserId(crendetials.email)
    const developmentAccount = await createTestAccount()
    const transportOptions = this.generateMailTrasport(developmentAccount)

    const compiledHTML = this.generateHtmlBody({
      fileName: 'confirmation.hbs',
      fileVariables: {
        id: findedId,
        name: crendetials.email,
      },
    })

    const configuredMail = this.generateConfiguredMail({
      sendOptions: {
        from: 'TechBlog <gm80648@gmail.com>',
        to: crendetials.email,
        html: compiledHTML,
        subject: '[TechBlog] Please confirm your email',
      },
      transportOptions,
    })

    try {
      return await sendMailUseCase.handle(configuredMail)
    } catch (err) {
      throw new Error(err.message)
    }
  }

  send = async (req: Request, res: Response) => {
    const { email }: ISendMailRequestDTO = req.body

    res.status(201).send({
      message: 'Created',
    })

    const trasportConfig = config.mail
    const transportOptions = this.generateMailTrasport(trasportConfig)

    const configuredMail = this.generateConfiguredMail({
      sendOptions: {
        from: 'Techblog <noreply@gm80648@gmail.com>',
        to: email,
        html: `
        <h1>a</h1>
        `,
        subject: 'Testing',
      },

      transportOptions,
    })

    try {
      await sendMailUseCase.handle(configuredMail)
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
