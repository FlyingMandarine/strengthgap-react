const User = require('../models/user')

const initialUsers = [
    {
        username: 'FlyingTest1',
        password: 'test123'
    },
    {
        username: 'FlyingTest2',
        password: 'testabc'
    },
    {
        username: 'FlyingTest3',
        password: 'testABC'
    },
]

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

module.exports = {
    initialUsers,
    usersInDb
}