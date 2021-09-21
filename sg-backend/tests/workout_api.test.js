const supertest = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')
const api = supertest(app)

describe('test test test', () => {
    test('this is a test', async () => {
        await api
            .get('/api/workouts')
            .expect(200)
    })
})

afterAll(async () => {
    await mongoose.connection.close()
})