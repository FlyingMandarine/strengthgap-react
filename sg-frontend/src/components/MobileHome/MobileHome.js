import React, { useState } from 'react'

import AppContainer from '../presentational/AppContainer'
import Footer from '../presentational/Footer'
import Menu from '../Menu/Menu'

import MobileHomeBottom from './MobileHomeBottom'
import MobileHomeTop from './MobileHomeTop'

const MobileHome = () => {

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
            <MobileHomeTop activateDemo={activateDemo} />
            <MobileHomeBottom demoInviteActive={ demoInviteActive } deactivateDemo={ deactivateDemo } />
            <Footer />
        </AppContainer>
    )
}

export default MobileHome