import React from 'react'

import DesktopAppContainer from '../DesktopPresentational/DesktopAppContainer'
import DesktopSignUpLeft from './DesktopSignUpLeft'
import DesktopSignUpRight from './DesktopSignUpRight'
import DesktopFooter from '../DesktopPresentational/DesktopFooter'

const DesktopSignUp = () => {

    return (
        <>
            <DesktopAppContainer>
                <DesktopSignUpLeft />
                <DesktopSignUpRight />
                <DesktopFooter />
            </DesktopAppContainer>
        </>
    )
}

export default DesktopSignUp