import React from 'react'

import AppContainer from '../presentational/AppContainer'
import MobileLandingBottom from './MobileLandingBottom'
import MobileLandingTop from './MobileLandingTop'
import Menu from '../Menu/Menu'

const MobileLanding1 = ({ changePage }) => {

    return (
        <AppContainer>
            <Menu />
            <MobileLandingTop />
            <MobileLandingBottom changePage={changePage} />
        </AppContainer>
    )
}

export default MobileLanding1