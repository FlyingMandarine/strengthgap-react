import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import AppContainer from '../presentational/AppContainer'
import Footer from '../presentational/Footer'
import Menu from '../Menu/Menu'

import MobileHomeBottom from './MobileHomeBottom'
import MobileHomeTop from './MobileHomeTop'
import DemoInvite from '../Menu/DemoInvite'

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
        <AppContainer>
            <Menu />
            <MobileHomeTop activateDemo={ activateDemo } />
            <MobileHomeBottom demoInviteActive={ demoInviteActive } deactivateDemo={ deactivateDemo } />
            { user === null && demoInviteActive === true &&
                <DemoInvite deactivateDemo={ deactivateDemo } />
            }
            <Footer />
        </AppContainer>
    )
}

export default MobileHome