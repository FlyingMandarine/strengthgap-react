import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { useSelector, useDispatch } from 'react-redux'
import { changeCurrentPage } from './reducers/pageReducer'

import MobileLanding1 from './components/MobileLanding/MobileLanding1'
import MobileHome from './components/MobileHome/MobileHome'
import Login from './components/Login/Login'


const App = () => {
    const dispatch = useDispatch()

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1225px)' })

    const currentPage = useSelector(state => state.page)

    const changePage = () => (
        dispatch(changeCurrentPage('MobileHome'))
    )

    if (currentPage === 'MobileLanding1') {
        return (
            <>
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