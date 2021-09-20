const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcrypt')

const User = require('../models/user')

beforeEach(async () => {
    await User.deleteMany({})
    await User.insertMany(helper.initialUsers)
})

describe('User-related tests', () => {
    test('Gets a list of usernames', async () => {
        const users = await api
            .get('/api/users')
            .expect(200)
            .expect('Content-Type', /application\/json/)

        expect(users.body).toHaveLength(helper.initialUsers.length)
    })

    test('Creation succeeds with a new username', async () => {
        const usersAtStart = await helper.usersInDb

        const newUser = {
            username: 'TestUser',
            password: 'qwerty'
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

        const usernames = usersAtEnd.map(u => u.username)
        expect(usernames).toContain(newUser.username)
    })

    test('Creation fails with status code 400 if username is already taken', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: 'FlyingTest2',
            password: 'qwerty'
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/)

        expect(result.body.error).toContain('`username` to be unique')

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length)
    })

    test('Deleting one\'s profile succeeds', async () => {
        const usersAtStart = await helper.usersInDb()

        const userToDelete = {
            username: 'FlyingTest2',
            password: 'qwerty'
        }

        // const result = await api
        //     .delete('/api/users')
    })
})

afterAll(() => {
    mongoose.connection.close()
})