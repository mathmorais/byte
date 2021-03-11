import dotenv from 'dotenv'
import { SignOptions } from 'jsonwebtoken'

dotenv.config({
  path: './src/infra/.env',
})

const checkCurrentDatabaseEnvironment = () => {
  const { NODE_ENV, DB_CONNECTION_TEST, DB_CONNECTION } = process.env

  const isOnTestEnviroment = NODE_ENV === 'test'

  return isOnTestEnviroment ? DB_CONNECTION_TEST : DB_CONNECTION
}

interface IMailConfig {
  smtp: {
    port: number
    secure: boolean
    host: string
  }
  user: string
  pass: string
}

const config = {
  server: {
    port: process.env.PORT,
  },
  database: {
    connection: checkCurrentDatabaseEnvironment(),
  },
  jsonwebtoken: {
    privateKey: process.env.PRIVATE_KEY,
    publicKey: process.env.PUBLIC_KEY,
    config: <SignOptions>{
      algorithm: 'RS256',
      expiresIn: '30d',
    },
  },
  mail: ({
    smtp: {
      host: process.env.MAIL_HOST!,
      port: process.env.MAIL_PORT!,
      secure: process.env.MAIL_SECURE!,
    },
    user: process.env.MAIL_USER!,
    pass: process.env.MAIL_PASS!,
  } as unknown) as IMailConfig,
}

export { config }
