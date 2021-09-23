const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcrypt')

const User = require('../models/user')

describe('User-related tests', () => {
    beforeEach(async () => {
        await User.deleteMany({})

        const passwordHash = await bcrypt.hash('secretpassword', 10)

        const user1 = new User({ username: helper.initialUsers[0].username, passwordHash })
        const user2 = new User({ username: helper.initialUsers[1].username, passwordHash })
        const user3 = new User({ username: helper.initialUsers[2].username, passwordHash })

        await user1.save()
        await user2.save()
        await user3.save()
    })

    describe('Login-related tests', () => {
        test('Logging in with correct password works', async () => {
            const loggedInUser = {
                username: 'FlyingTest1',
                password: 'secretpassword'
            }

            await api
                .post('/api/login')
                .send(loggedInUser)
                .expect(200)
        })

        test('Logging in with incorrect password fails with 401', async () => {
            const loggedInUser = {
                username: 'FlyingTest1',
                password: 'wrongpassword'
            }

            await api
                .post('/api/login')
                .send(loggedInUser)
                .expect(401)
        })
    })

    describe('Creation-related tests', () => {
        test('Creation succeeds with a new username', async () => {
            const usersAtStart = await helper.usersInDb()

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

        test('Creation fails with 400 if username is already taken', async () => {
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

            expect(result.body.error).toContain('expected `username` to be unique')

            const usersAtEnd = await helper.usersInDb()
            expect(usersAtEnd).toHaveLength(usersAtStart.length)
        })
    })

    describe('Deletion-related tests', () => {
        test('Deleting one\'s own profile works with 204', async () => {
            const usersAtStart = await helper.usersInDb()
            const userToDelete = usersAtStart[0]

            const loggedInUser = {
                username: 'FlyingTest1',
                password: 'secretpassword'
            }

            const result = await api
                .post('/api/login')
                .send(loggedInUser)
                .expect('Content-Type', /application\/json/)

            await api
                .delete(`/api/users/${userToDelete.id}`)
                .set('Authorization', 'bearer ' + result.body.token)
                .expect(204)

            const usersAtEnd = await helper.usersInDb()
            expect(usersAtEnd).toHaveLength(helper.initialUsers.length - 1)

            const userIds = usersAtEnd.map(u => u.id)
            expect(userIds).not.toContain(userToDelete.id)
        })

        test('Deleting someone else\'s profile fails', async () => {
            const usersAtStart = await helper.usersInDb()
            const userToDelete = usersAtStart[1]

            const loggedInUser = {
                username: 'FlyingTest1',
                password: 'secretpassword'
            }

            const result = await api
                .post('/api/login')
                .send(loggedInUser)
                .expect('Content-Type', /application\/json/)

            await api
                .delete(`/api/users/${userToDelete.id}`)
                .set('Authorization', 'bearer ' + result.body.token)
                .expect(401)

            const usersAtEnd = await helper.usersInDb()
            expect(usersAtEnd).toHaveLength(helper.initialUsers.length)

            const userIds = usersAtEnd.map(u => u.id)
            expect(userIds).toContain(userToDelete.id)
        })
    })

    describe('Password change-related tests', () => {
        test('Changing a user\'s password works if the right user is logged in', async () => {

            const userWithOldPassword = {
                username: 'FlyingTest1',
                password: 'secretpassword'
            }

            const userWithNewPassword = {
                username: 'FlyingTest1',
                password: 'newsecretpassword'
            }

            // Logging in with the original password
            const result = await api
                .post('/api/login')
                .send(userWithOldPassword)
                .expect(200)

            const loggedInUser = await User.findOne({ username: result.body.username })

            // Then updating the password to a new one
            await api
                .put(`/api/users/${loggedInUser.id}`)
                .set('Authorization', 'bearer ' + result.body.token)
                .send(userWithNewPassword)
                .expect(200)

            // Finally, trying to log in with the new password

            await api
                .post('/api/login')
                .send(userWithNewPassword)
                .expect(200)
        })

        test('Changing a user\'s password doesn\'t work if the wrong user is logged in', async () => {

            const user1 = {
                username: 'FlyingTest1',
                password: 'secretpassword'
            }

            const user2WithNewPassword = {
                username: 'FlyingTest2',
                password: 'newsecretpassword'
            }

            // Logging in with the original password
            const result = await api
                .post('/api/login')
                .send(user1)
                .expect(200)

            const user2 = await User.findOne({ username: 'FlyingTest2' })

            // Then updating the password to a new one

            await api
                .put(`/api/users/${user2.id}`)
                .set('Authorization', 'bearer ' + result.body.token)
                .send(user2WithNewPassword)
                .expect(401)
        })
    })
})

afterAll(async () => {
    await mongoose.connection.close()
})