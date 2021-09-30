import React from 'react'

import MobileAppContainer from '../MobilePresentational/MobileAppContainer'
import MobileFooter from '../MobilePresentational/MobileFooter'

import MobilePasswordChangeTop from './MobilePasswordChangeTop'
import MobilePasswordChangeBottom from './MobilePasswordChangeBottom'

const MobilePasswordChange = () => {

    return (
        <MobileAppContainer>
            <MobilePasswordChangeTop />
            <MobilePasswordChangeBottom />
            <MobileFooter />
        </MobileAppContainer>
    )
}

export default MobilePasswordChange