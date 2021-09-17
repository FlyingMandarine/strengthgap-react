import { createStore, combineReducers } from 'redux'
import pageReducer from './reducers/pageReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
    page: pageReducer,
    user: userReducer,
})

const store = createStore(reducer)

export default store