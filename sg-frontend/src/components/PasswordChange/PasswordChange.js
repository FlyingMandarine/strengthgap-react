import React from 'react'

import AppContainer from '../presentational/AppContainer'
import Footer from '../presentational/Footer'

import PasswordChangeTop from './PasswordChangeTop'
import PasswordChangeBottom from './PasswordChangeBottom'

const PasswordChange = () => {

    return (
        <AppContainer>
            <PasswordChangeTop />
            <PasswordChangeBottom />
            <Footer />
        </AppContainer>
    )
}

export default PasswordChange