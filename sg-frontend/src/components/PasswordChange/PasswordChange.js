import React from 'react'

import AppContainer from '../presentational/AppContainer'
import PasswordChangeTop from './PasswordChangeTop'
import PasswordChangeBottom from './PasswordChangeBottom'

const PasswordChange = () => {

    return (
        <AppContainer>
            <PasswordChangeTop />
            <PasswordChangeBottom />
        </AppContainer>
    )
}

export default PasswordChange