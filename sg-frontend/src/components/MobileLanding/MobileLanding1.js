import React from 'react'

import AppContainer from '../presentational/AppContainer'
import MobileLandingBottom from './MobileLandingBottom'
import MobileLandingTop from './MobileLandingTop'

const MobileLanding1 = ({ changePage }) => {

    return (
        <AppContainer>
            <MobileLandingTop />
            <MobileLandingBottom changePage={changePage} />
        </AppContainer>
    )
}

export default MobileLanding1