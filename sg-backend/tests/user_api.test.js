const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcrypt')

const User = require('../models/user')

beforeEach(async () => {
    await User.deleteMany({})
    await User.insertMany(helper.initialUsers)
})

test('Gets a list of usernames', async () => {
    const users = await api
        .get('/api/users')
        .expect(200)
        .expect('Content-Type', /application\/json/)

    expect(users).toHaveLength(helper.initialUsers.length)
})