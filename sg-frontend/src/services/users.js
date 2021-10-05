import axios from 'axios'
const baseUrl = '/api/users'

const createUser = async (newUser) => {
    const response = await axios.post(baseUrl, newUser)
    return response.data
}

const updateUser = async (storageInfo, userToUpdate) => {
    const token = `bearer ${storageInfo.token}`

    const config = {
        headers: { Authorization: token }
    }

    const response = await axios.put(`${baseUrl}/${storageInfo.id}`, userToUpdate, config)
    return response.data
}

const deleteUser = async (storageInfo) => {
    const token = `bearer ${storageInfo.token}`

    const config = {
        headers: { Authorization: token }
    }

    const response = await axios.delete(`${baseUrl}/${storageInfo.id}`, config)
    return response.data
}

const exports = { createUser, updateUser, deleteUser }

export default exports