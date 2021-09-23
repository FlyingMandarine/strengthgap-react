import React from 'react'

import AppContainer from '../presentational/AppContainer'
import Footer from '../presentational/Footer'
import Menu from '../Menu/Menu'

import MobileHomeBottom from './MobileHomeBottom'
import MobileHomeTop from './MobileHomeTop'

const MobileHome = () => {

    return (
        <AppContainer>
            <Menu />
            <MobileHomeTop />
            <MobileHomeBottom />
            <Footer />
        </AppContainer>
    )
}

export default MobileHome