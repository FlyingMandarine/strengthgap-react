// ONLY FOR USE FOR FRONTEND CYPRESS

const router = require('express').Router()

const Session = require('../models/session')
const User = require('../models/user')

router.post('/reset', async (request, response) => {
    await User.deleteMany({})
    await Session.deleteMany({})

    response.status(204).end()
})

module.exports = router