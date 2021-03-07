import request from 'supertest'
import mongoose from 'mongoose'
import { app } from '../loaders/express'
import { UserModel } from '../models/User'
import { mongoLoader } from '../loaders/mongo'

describe('User creation', () => {
  beforeAll(async () => {
    await mongoLoader()
  })
  afterAll(async done => {
    await mongoose.connection.close()
    done()
  })

  const CreationCredentials = {
    name: 'testing',
    email: 'email@gmail.com',
    password: '123456789',
  }

  it('Should return 201 when credentials is valid', async done => {
    request(app)
      .post('/api/users/create')
      .send(CreationCredentials)
      .expect(201, done)
  })
  it('Should return 400 when email already exist', async done => {
    request(app)
      .post('/api/users/create')
      .send(CreationCredentials)
      .expect(400, done)
  })
  it('Should return 400 when credentials is null', async done => {
    request(app).post('/api/users/create').send({}).expect(400, done)
  })
})

describe('User authentication', () => {
  beforeAll(async () => {
    await mongoLoader()
  })
  afterAll(async done => {
    await mongoose.connection.close()
    done()
  })

  const ValidAuthFakeCredentials = {
    email: 'email@gmail.com',
    password: '123456789',
  }
  const InvalidAuthFakeCredentials = {
    email: 'email@gmail.com',
    password: '987654321',
  }

  it('Should return 200 when user credentials is valid', async done => {
    request(app)
      .post('/api/users/auth')
      .send(ValidAuthFakeCredentials)
      .expect(200, done)
  })
  it('Should return 401 when user credentials is not valid', async done => {
    request(app)
      .post('/api/users/auth')
      .send(InvalidAuthFakeCredentials)
      .expect(401, done)
  })
  it("Should return 401 when user doesn't exist", async done => {
    request(app).post('/api/users/auth').send({}).expect(401, done)
  })
})

describe('User email verify', () => {
  beforeAll(async () => {
    await mongoLoader()
  })
  afterAll(async done => {
    await UserModel.deleteMany({})
    await mongoose.connection.close()
    done()
  })

  it('Should return 302 when user exist', async done => {
    const userID = '6041420bade56900327fda32'
    request(app).get(`/api/users/verify/${userID}`).expect(302, done)
  })
})
