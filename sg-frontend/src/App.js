import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentPage } from './reducers/pageReducer'
import { changeUser } from './reducers/userReducer'

import MobileLanding1 from './components/MobileLanding/MobileLanding1'
import MobileHome from './components/MobileHome/MobileHome'
import Login from './components/Login/Login'


const App = () => {
    const dispatch = useDispatch()

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1225px)' })

    const currentPage = useSelector(state => state.page)
    const user = useSelector(state => state.user)

    // If the user is logged in and the app is restarted, we check if there is
    // a user stored in localStorage; if so, we store the username in the store.
    if (user === null && window.localStorage.getItem('loggedSGUser')) {
        const storageInfo = JSON.parse(window.localStorage.getItem('loggedSGUser'))
        dispatch(changeUser(storageInfo.username))
    }

    const changePage = () => (
        dispatch(changeCurrentPage('MobileHome'))
    )

    if (currentPage === 'MobileLanding1') {
        return (
            <>
                {
                    user === null ?
                        'user is null':
                        'user is not null'
                }
                {isMobile && <MobileLanding1 changePage={changePage}/>}
                {isDesktop && <p>DESKTOP VERSION NEEDED</p>}
            </>
        )
    } else if (currentPage === 'MobileHome') {
        return (
            <MobileHome />
        )
    } else if (currentPage === 'Login') {
        return (
            <Login />
        )
    }
}

export default App