import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import AppContainerDesktop from '../presentational/AppContainerDesktop'
import Menu from '../Menu/Menu'
import FooterDesktop from '../presentational/FooterDesktop'

import DesktopHomeLeft from './DesktopHomeLeft'
import DesktopHomeRight from './DesktopHomeRight'
import DemoInvite from '../Menu/DemoInvite'

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
        <AppContainerDesktop>
            { user !== null && <Menu /> }
            <DesktopHomeLeft activateDemo={ activateDemo } />
            <DesktopHomeRight demoInviteActive={ demoInviteActive } deactivateDemo={ deactivateDemo } />
            { user === null && demoInviteActive === true &&
                <DemoInvite deactivateDemo={ deactivateDemo } />
            }
            <FooterDesktop />
        </AppContainerDesktop>
    )
}

export default DesktopHome