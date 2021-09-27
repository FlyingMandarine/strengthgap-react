const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcrypt')

const Session = require('../models/session')
const User = require('../models/user')

describe('Workout history-related tests', () => {
    beforeEach(async () => {
        await User.deleteMany({})
        await Session.deleteMany({})

        const passwordHash = await bcrypt.hash('secretpassword', 10)

        const user1 = new User({ username: helper.initialUsers[0].username, passwordHash })
        const user2 = new User({ username: helper.initialUsers[1].username, passwordHash })
        const user3 = new User({ username: helper.initialUsers[2].username, passwordHash })

        await user1.save()
        await user2.save()
        await user3.save()

        const session1 = new Session(helper.initialSessions[0])
        const session2 = new Session(helper.initialSessions[1])
        const session3 = new Session(helper.initialSessions[2])
        const session4 = new Session(helper.initialSessions[3])
        const session5 = new Session(helper.initialSessions[4])

        await session1.save()
        await session2.save()
        await session3.save()
        await session4.save()
        await session5.save()
    })

    describe('Submission-related tests', () => {
        test('A user can retrieve all their sessions but not another user\'s', async () => {
            const username = 'FlyingTest1'

            const result = await api
                .get(`/api/sessions/${username}`)
                .expect(200)

            expect(result.body).toHaveLength(3)

            result.body.forEach(session => {
                expect(session.username).toBe(username)
            })
        })

        test('Sessions are submitted successfully', async () => {
            const username = 'FlyingTest1'

            const sessionsAtStart = await Session.find({ username: username })

            const newSession = {
                username: username,
                exercises: [
                    'Cable Pull Through',
                    'Clean and Jerk',
                    'Behind The Back Cable Curl',
                    'Bench Pin Press',
                    'Bent Over Row',
                    'Bench Dips'
                ],
                percent: 70,
            }

            await api
                .post('/api/sessions')
                .send(newSession)
                .expect(200)

            const sessionsAtEnd = await Session.find({ username: username })
            expect(sessionsAtEnd).toHaveLength(sessionsAtStart.length + 1)
        })
    })

    describe('Deletion-related tests', () => {
        test('Deleting one of your own sessions works with 204', async () => {
            const username = 'FlyingTest1'

            const loggedInUser = {
                username: username,
                password: 'secretpassword'
            }

            const sessionsAtStart = await Session.find({ username: username })
            const sessionToDelete = sessionsAtStart[0]

            const result = await api
                .post('/api/login')
                .send(loggedInUser)
                .expect('Content-Type', /application\/json/)

            await api
                .delete(`/api/sessions/${sessionToDelete.id}`)
                .set('Authorization', 'bearer ' + result.body.token)
                .expect(204)

            const sessionsAtEnd = await Session.find({ username: username })
            expect(sessionsAtEnd).toHaveLength(sessionsAtStart.length - 1)
        })

        test('Deleting another user\'s session fails with 401', async () => {
            const username1 = 'FlyingTest1'
            const username2 = 'FlyingTest2'

            const loggedInUser = {
                username: username1,
                password: 'secretpassword'
            }

            const user1SessionsAtStart = await Session.find({ username: username1 })

            const user2SessionsAtStart = await Session.find({ username: username2 })
            const sessionToDelete = user2SessionsAtStart[0]

            const result = await api
                .post('/api/login')
                .send(loggedInUser)
                .expect('Content-Type', /application\/json/)

            await api
                .delete(`/api/sessions/${sessionToDelete.id}`)
                .set('Authorization', 'bearer ' + result.body.token)
                .expect(401)

            const user1SessionsAtEnd = await Session.find({ username: username1 })
            const user2SessionsAtEnd = await Session.find({ username: username2 })

            expect(user1SessionsAtEnd).toHaveLength(user1SessionsAtStart.length)
            expect(user2SessionsAtEnd).toHaveLength(user2SessionsAtStart.length)
        })
    })
})

afterAll(async () => {
    await mongoose.connection.close()
})