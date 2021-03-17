export const checkCurrentEnviroment = () => {
  const DEVELOPMENT_URL = 'http://localhost:5050/api'
  const PRODUCTION_URL = 'http://server:5050/api'

  const isOnDevelopmentEnviroment = process.env.NODE_ENV === 'development'

  return isOnDevelopmentEnviroment ? DEVELOPMENT_URL : PRODUCTION_URL
}
