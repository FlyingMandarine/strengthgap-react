export const changeCurrentPage = (page) => {
    return {
        type: page
    }
}

const pageReducer = (state = 'MobileLanding1', action) => {
    switch (action.type) {
        case 'MobileHome':
            return 'MobileHome'
        default:
            return state
    }
}

export default pageReducer