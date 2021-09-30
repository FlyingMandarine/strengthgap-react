import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import MobileAppContainer from '../MobilePresentational/MobileAppContainer'
import MobileFooter from '../MobilePresentational/MobileFooter'
import MobileMenu from '../MobileMenu/MobileMenu'

import MobileHomeBottom from './MobileHomeBottom'
import MobileHomeTop from './MobileHomeTop'
import MobileDemoInvite from '../MobileMenu/MobileDemoInvite'

const MobileHome = () => {
    const user = useSelector(state => state.user)

    const [ demoInviteActive, setDemoInviteActive ] = useState(false)

    const activateDemo = () => {
        if (demoInviteActive === false) {
            setDemoInviteActive(true)
        }
    }

    const deactivateDemo = () => {
        setDemoInviteActive(null)
    }

    return (
        <MobileAppContainer>
            <MobileMenu />
            <MobileHomeTop activateDemo={ activateDemo } />
            <MobileHomeBottom demoInviteActive={ demoInviteActive } deactivateDemo={ deactivateDemo } />
            { user === null && demoInviteActive === true &&
                <MobileDemoInvite deactivateDemo={ deactivateDemo } />
            }
            <MobileFooter />
        </MobileAppContainer>
    )
}

export default MobileHome