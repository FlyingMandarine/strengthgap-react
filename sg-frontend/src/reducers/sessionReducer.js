export const updateSession = (updatedSession) => {
    return {
        type: 'UPDATE',
        updatedSession: updatedSession
    }
}

export const emptySession = () => {
    return {
        type: 'EMPTY'
    }
}

const sessionReducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            return action.updatedSession
        case 'EMPTY':
            return []
        default:
            return state
    }
}

export default sessionReducer