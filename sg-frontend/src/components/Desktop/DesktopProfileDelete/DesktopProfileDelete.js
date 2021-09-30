import React from 'react'

import DesktopAppContainer from '../DesktopPresentational/DesktopAppContainer'
import DesktopProfileDeleteLeft from './DesktopProfileDeleteLeft'
import DesktopProfileDeleteRight from './DesktopProfileDeleteRight'
import DesktopFooter from '../DesktopPresentational/DesktopFooter'

const DesktopProfileDelete = () => {

    return (
        <>
            <DesktopAppContainer>
                <DesktopProfileDeleteLeft />
                <DesktopProfileDeleteRight />
                <DesktopFooter />
            </DesktopAppContainer>
        </>
    )
}

export default DesktopProfileDelete