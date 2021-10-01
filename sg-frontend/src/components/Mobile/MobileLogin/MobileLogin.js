import React from 'react'

import MobileAppContainer from '../MobilePresentational/MobileAppContainer'
import MobileLoginTop from './MobileLoginTop'
import MobileLoginBottom from './MobileLoginBottom'
import MobileFooter from '../MobilePresentational/MobileFooter'

const MobileLogin = () => {

    return (
        <>
            <MobileAppContainer>
                <MobileLoginTop />
                <MobileLoginBottom />
                <MobileFooter />
            </MobileAppContainer>
        </>
    )
}

export default MobileLogin