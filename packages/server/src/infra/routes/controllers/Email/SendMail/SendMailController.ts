import { getTestMessageUrl, createTestAccount } from 'nodemailer'
import { sendMailUseCase } from '@app/useCases/Email/SendMail'
import { Request, Response } from 'express'
import { ISendMailRequestDTO } from './SendMailRequestDTO'
import { config } from '@infra/config'
import { SendMailGenerator } from './SendMailGenerator'
import { tokenSign } from '@infra/utils/tokenSign'
import { findUserByEmailUseCase } from '@app/useCases/UserSeaching/FindUserByEmail'

export class SendMailController extends SendMailGenerator {
  private getUserId = async (email: string) => {
    const user = await findUserByEmailUseCase.handle({
      email,
    })

    return user!.id
  }

  sendDevelopment = async (req: Request, res: Response) => {
    const { email, name }: ISendMailRequestDTO = req.body

    res.status(201).send({
      message: 'Created',
    })

    const userId = await this.getUserId(email)
    const developmentAccount = await createTestAccount()
    const transportOptions = this.generateMailTrasport(developmentAccount)

    const compiledHTML = this.generateHtmlBody({
      fileName: 'presentation.hbs',
      fileVariables: {
        id: userId,
        name,
        token: tokenSign({ id: userId }),
      },
    })

    const configuredMail = this.generateConfiguredMail({
      sendOptions: {
        from: 'Techblog <gm80648@gmail.com>',
        to: email,
        html: compiledHTML,
        subject: 'Testing',
      },
      transportOptions,
    })

    try {
      const info = await sendMailUseCase.handle(configuredMail)
      return console.log(getTestMessageUrl(info))
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
