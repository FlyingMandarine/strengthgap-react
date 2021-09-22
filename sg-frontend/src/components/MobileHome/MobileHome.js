import React from 'react'

import AppContainer from '../presentational/AppContainer'
import Menu from '../Menu/Menu'

import MobileHomeBottom from './MobileHomeBottom'
import MobileHomeTop from './MobileHomeTop'

const MobileHome = () => {

    return (
        <AppContainer>
            <Menu />
            <MobileHomeTop />
            <MobileHomeBottom />
        </AppContainer>
    )
}

export default MobileHome