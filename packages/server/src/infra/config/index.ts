const checkCurrentDatabaseEnvironment = () => {
  const { NODE_ENV, DB_CONNECTION_TEST, DB_CONNECTION } = process.env

  const isOnTestEnviroment = NODE_ENV === 'test'

  return isOnTestEnviroment ? DB_CONNECTION_TEST : DB_CONNECTION
}

const config = {
  server: {
    port: process.env.PORT,
  },
  database: {
    connection: checkCurrentDatabaseEnvironment(),
  },
}

export { config }
