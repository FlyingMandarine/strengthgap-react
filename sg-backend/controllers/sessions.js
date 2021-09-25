const jwt = require('jsonwebtoken')
const sessionsRouter = require('express').Router()

const Session = require('../models/session')
const User = require('../models/user')

sessionsRouter.get('/:username', async (request, response) => {
    const sessions = await Session.find({ username: request.params.username })

    response.json(sessions)
})

sessionsRouter.post('/', async (request, response) => {
    const body = request.body

    const session = new Session({
        username: body.username,
        exercises: body.exercises,
        percent: body.percent,
        date: String
    })

    const savedSession = await session.save()

    response.json(savedSession)
})

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

sessionsRouter.delete('/:id', async (request, response) => {
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)
    const session = await Session.findById(request.params.id)

    if (user.username === session.username) {
        await Session.findByIdAndRemove(request.params.id)
        response.status(204).end()
    } else {
        response.status(401).end()
    }
})

module.exports = sessionsRouter