import request from 'supertest'
import mongoose from 'mongoose'
import { app } from '../loaders/express'
import { User } from '@domain/entities/User'
import { UserModel } from '../models/User'
import { mongoLoader } from '../loaders/mongo'

describe('User creation tests', () => {
  const credentials: User = {
    name: 'testing',
    email: 'email@gmail.com',
    password: 'password1234',
  }
  beforeAll(async () => {
    await mongoLoader()
  })
  afterAll(async done => {
    await UserModel.deleteMany({})
    await mongoose.connection.close()
    done()
  })
  it('Should return 201 when contains a valid body', async done => {
    request(app).post('/api/users/create').send(credentials).expect(201, done)
  })
  it('Should return 401 when email there already exist', async done => {
    request(app).post('/api/users/create').send(credentials).expect(401, done)
  })
  it('Should return 400 when body is null', async done => {
    request(app).post('/api/users/create').send({}).expect(400, done)
  })
})
