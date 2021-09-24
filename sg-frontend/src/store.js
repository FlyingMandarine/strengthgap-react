import { createStore, combineReducers } from 'redux'
import pageReducer from './reducers/pageReducer'
import sessionReducer from './reducers/sessionReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
    page: pageReducer,
    user: userReducer,
    session: sessionReducer,
})

const store = createStore(reducer)

export default store