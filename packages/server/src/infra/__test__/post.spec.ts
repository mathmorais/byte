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
  it('Should return 200 when credentials is valid and the token has an admin role', async done => {
    const credentials: IPostCreatorRequestDTO = {
      infos: {
        read_time: 500,
        thumbnail: 'photo-123',
        title: 'test',
      },
      content: '# Test',
    }

    request(app).post('/api/posts/create').send(credentials).expect(201, done)
  })
})

describe('Post searching', () => {
  beforeAll(async () => {
    await mongoLoader()
  })
  afterAll(async done => {
    await PostModel.deleteMany({})
    await mongoose.connection.close()
    done()
  })
  it('Should return all posts of posts when called', async done => {
    request(app).get('/api/posts/search').expect(200, done)
  })
  it('Should return an unique post when called', async done => {
    request(app).get(`/api/posts/search/one?id=123`).expect(200, done)
  })
  it('Should return posts that match at the query filter', async done => {
    const filter = 'a'

    request(app)
      .get(`/api/posts/search/filter?filter=${filter}`)
      .expect(200, done)
  })
})
