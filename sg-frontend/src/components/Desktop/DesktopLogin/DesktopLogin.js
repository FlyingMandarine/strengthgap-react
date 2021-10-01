import React from 'react'

import DesktopAppContainer from '../DesktopPresentational/DesktopAppContainer'
import DesktopLoginLeft from './DesktopLoginLeft'
import DesktopLoginRight from './DesktopLoginRight'
import DesktopFooter from '../DesktopPresentational/DesktopFooter'

const DesktopLogin = () => {

    return (
        <>
            <DesktopAppContainer>
                <DesktopLoginLeft />
                <DesktopLoginRight />
                <DesktopFooter />
            </DesktopAppContainer>
        </>
    )
}

export default DesktopLogin