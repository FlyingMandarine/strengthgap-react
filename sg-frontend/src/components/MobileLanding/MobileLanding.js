import React from 'react'

import MobileLandingBottom from './MobileLandingBottom'
import MobileLandingTop from './MobileLandingTop'

import AppContainer from '../presentational/AppContainer'
import Footer from '../presentational/Footer'
import Menu from '../Menu/Menu'

const MobileLanding = ({ changePage }) => {

    return (
        <AppContainer>
            <Menu />
            <MobileLandingTop />
            <MobileLandingBottom changePage={changePage} />
            <Footer />
        </AppContainer>
    )
}

export default MobileLanding