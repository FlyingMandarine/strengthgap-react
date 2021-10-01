import React from 'react'

import DesktopAppContainer from '../DesktopPresentational/DesktopAppContainer'
import DesktopPasswordChangeLeft from './DesktopPasswordChangeLeft'
import DesktopPasswordChangeRight from './DesktopPasswordChangeRight'
import DesktopFooter from '../DesktopPresentational/DesktopFooter'

const DesktopPasswordChange = () => {

    return (
        <>
            <DesktopAppContainer>
                <DesktopPasswordChangeLeft />
                <DesktopPasswordChangeRight />
                <DesktopFooter />
            </DesktopAppContainer>
        </>
    )
}

export default DesktopPasswordChange