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
      infos: {
        read_time: 500,
        thumbnail: 'photo-123',
        title: 'test',
      },
      tags: ['Test'],
      content: '# Test',
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
  it('Should return posts that match at the query filter', async done => {
    const filter = 'a'

    request(app).get(`/api/posts/search?filter=${filter}`).expect(200, done)
  })
})
