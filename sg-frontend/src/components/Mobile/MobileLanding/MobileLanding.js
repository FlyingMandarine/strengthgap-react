import React from 'react'

import MobileLandingBottom from './MobileLandingBottom'
import MobileLandingTop from './MobileLandingTop'

import MobileAppContainer from '../MobilePresentational/MobileAppContainer'
import MobileFooter from '../MobilePresentational/MobileFooter'
import MobileMenu from '../MobileMenu/MobileMenu'

const MobileLanding = ({ changePage }) => {

    return (
        <MobileAppContainer>
            <MobileMenu />
            <MobileLandingTop />
            <MobileLandingBottom changePage={changePage} />
            <MobileFooter />
        </MobileAppContainer>
    )
}

export default MobileLanding