import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useSelector, useDispatch } from 'react-redux'
import MobileLanding1 from './components/MobileLanding1'
import MobileHome from './components/MobileHome/MobileHome'

import { changeCurrentPage } from './reducers/pageReducer'

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
            <div>
                {isMobile && <MobileLanding1 changePage={changePage}/>}
                {isDesktop && <p>DESKTOP VERSION NEEDED</p>}
            </div>
        )
    } else if (currentPage === 'MobileHome') {
        return (
            <div>
                <MobileHome />
            </div>
        )
    }
}

export default App