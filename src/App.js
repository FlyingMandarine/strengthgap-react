import React, { useState } from 'react'
import MobileLanding1 from './components/MobileLanding1'
import MobileHome from './components/MobileHome'

const App = () => {
    const [ page, setPage ] = useState('MobileLanding1')

    const changePage = () => {
        setPage('MobileHome')
    }

    if (page === 'MobileLanding1') {
        return (
            <MobileLanding1 onClick={changePage} />
        )
    } else if (page === 'MobileHome') {
        return (
            <MobileHome />
        )
    }
}

export default App