import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import DesktopAppContainer from '../DesktopPresentational/DesktopAppContainer'
import DesktopMenu from '../DesktopMenu/DesktopMenu'
import DesktopFooter from '../DesktopPresentational/DesktopFooter'

import DesktopHomeLeft from './DesktopHomeLeft'
import DesktopHomeRight from './DesktopHomeRight'
import DesktopDemoInvite from '../DesktopMenu/DesktopDemoInvite'

const DesktopHome = () => {
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
        <DesktopAppContainer>
            { user !== null && <DesktopMenu /> }
            { user === null && demoInviteActive === true &&
                <DesktopDemoInvite deactivateDemo={ deactivateDemo } />
            }
            <DesktopHomeLeft activateDemo={ activateDemo } />
            <DesktopHomeRight demoInviteActive={ demoInviteActive } deactivateDemo={ deactivateDemo } />
            <DesktopFooter />
        </DesktopAppContainer>
    )
}

export default DesktopHome