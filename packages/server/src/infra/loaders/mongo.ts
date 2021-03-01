import mongoose from 'mongoose'
import { config } from '../config'

const mongoLoader = async () => {
  if (config.database.connection) {
    await mongoose.connect(config.database.connection, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
  } else {
    throw new Error('Check enviroment varibles, someone can be undefined')
  }
}

export { mongoLoader }
