const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})

    response.json(users)
})

usersRouter.post('/', async (request, response) => {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        username: body.username,
        passwordHash,
    })

    const savedUser = await user.save()

    response.json(savedUser)
})

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

usersRouter.delete('/:id', async (request, response) => {
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)

    if (request.params.id === user.id) {
        await User.findByIdAndRemove(request.params.id)
        response.status(204).end()
    } else {
        response.status(401).end()
    }
})

usersRouter.put('/:id', async (request, response, next) => {
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    const currentUser = await User.findById(decodedToken.id)

    if (request.params.id !== currentUser.id) {
        return response.status(401).json({ error: 'incorrect token used' })
    }

    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = {
        username: body.username,
        passwordHash: passwordHash,
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(request.params.id, user, { new: true })
        return response.json(updatedUser)
    } catch (error) {
        next(error)
    }
})

module.exports = usersRouter