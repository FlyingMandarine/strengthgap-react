import React from 'react'

import MobileAppContainer from '../MobilePresentational/MobileAppContainer'
import MobileFooter from '../MobilePresentational/MobileFooter'

import MobileProfileDeleteTop from './MobileProfileDeleteTop'
import MobileProfileDeleteBottom from './MobileProfileDeleteBottom'

const MobileProfileDelete = () => {

    return (
        <MobileAppContainer>
            <MobileProfileDeleteTop />
            <MobileProfileDeleteBottom />
            <MobileFooter />
        </MobileAppContainer>
    )
}

export default MobileProfileDelete