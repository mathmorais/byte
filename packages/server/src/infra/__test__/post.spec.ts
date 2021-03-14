import request from 'supertest'
import mongoose from 'mongoose'
import { app } from '../loaders/express'
import { PostModel } from '../models/Post'
import { mongoLoader } from '../loaders/mongo'
import { IPostCreatorRequestDTO } from '@infra/routes/post/controllers/PostCreator/PostCreatorRequestDTO'

describe('Post creation', () => {
  beforeAll(async () => {
    await mongoLoader()
  })
  afterAll(async done => {
    await mongoose.connection.close()
    done()
  })
  it('Should return 200 when credentials is valid', async done => {
    const credentials: IPostCreatorRequestDTO = {
      title: 'Testing post',
      content: '**Testing**',
      read_time: 456,
      tags: ['test'],
      background:
        'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80',
    }

    request(app).post('/api/posts/create').send(credentials).expect(201, done)
  })
})

describe('Post searching', () => {
  let createdPostId: string = ''

  beforeAll(async () => {
    await mongoLoader()
  })
  afterAll(async done => {
    await PostModel.deleteMany({})
    await mongoose.connection.close()
    done()
  })
  it('Should return all posts of posts when called', async done => {
    const { body } = await request(app).get('/api/posts/search/all')

    expect(body.message.length).toBeGreaterThanOrEqual(1)
  })
  it('Should return an unique post when called', async done => {
    const { body } = await request(app).get(
      `/api/posts/search/${createdPostId}`
    )

    expect(body.message.length).toBeLessThanOrEqual(1)
  })
})
