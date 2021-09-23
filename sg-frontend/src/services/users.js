import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users'

const createUser = async (newUser) => {

    const response = await axios.post(baseUrl, newUser)
    return response.data
}

const exports = { createUser }

export default exports