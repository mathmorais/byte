import { app } from './loaders/express'
import { mongoLoader } from './loaders/mongo'
import { config } from './config/index'

const starter = async () => {
  await mongoLoader()

  app.listen(config.server.port, () =>
    console.log(`Server listen on http://localhost:${config.server.port}`)
  )
}

starter()
