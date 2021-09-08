import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import MobileLanding1 from './components/MobileLanding1'
import MobileHome from './components/MobileHome'

const App = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1225px)' })

    const [ page, setPage ] = useState('MobileLanding1')
    const [ user, setUser ] = useState(null)

    const changePage = () => (
        setPage('MobileHome')
    )

    if (page === 'MobileLanding1') {
        return (
            <div>
                {isMobile && <MobileLanding1 changePage={changePage}/>}
                {isDesktop && <p>DESKTOP VERSION NEEDED</p>}
            </div>
        )
    } else if (page === 'MobileHome') {
        return (
            <MobileHome />
        )
    }
}

export default App