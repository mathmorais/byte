import dotenv from 'dotenv'

dotenv.config({
  path: './src/infra/.env',
})

const checkCurrentDatabaseEnvironment = () => {
  const { NODE_ENV, DB_CONNECTION_TEST, DB_CONNECTION } = process.env

  const isOnTestEnviroment = NODE_ENV === 'test'

  return isOnTestEnviroment ? DB_CONNECTION_TEST : DB_CONNECTION
}

const checkCurrentPortEnviroment = () => {
  const { NODE_ENV, PORT } = process.env

  const isOnTestEnviroment = NODE_ENV === 'test'

  return isOnTestEnviroment ? 7070 : PORT
}

const config = {
  server: {
    port: checkCurrentPortEnviroment(),
  },
  database: {
    connection: checkCurrentDatabaseEnvironment(),
  },
}

export { config }
