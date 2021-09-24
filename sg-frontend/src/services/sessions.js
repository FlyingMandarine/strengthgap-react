import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/sessions'

const fetchSessions = async (user) => {
    const response = await axios.get(`${baseUrl}/${user}`)
    return response.data
}

const recordSession = async (session) => {
    const response = await axios.post(baseUrl, session)
    return response.data
}

const exports = { fetchSessions, recordSession }

export default exports