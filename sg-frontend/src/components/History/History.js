import React from 'react'

import AppContainer from '../presentational/AppContainer'
import HistoryTop from './HistoryTop'
import HistoryBottom from './HistoryBottom'
import Footer from '../presentational/Footer'

const History = () => {

    return (
        <>
            <AppContainer>
                <HistoryTop />
                <HistoryBottom />
                <Footer />
            </AppContainer>
        </>
    )
}

export default History