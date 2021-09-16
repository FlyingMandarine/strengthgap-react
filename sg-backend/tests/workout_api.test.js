const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

describe('test test test', () => {
    test('this is a test', async () => {
        await api
            .get('/api/workouts')
            .expect(200)
    })
})