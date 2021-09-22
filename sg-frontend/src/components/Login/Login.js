import React from 'react'

import AppContainer from '../presentational/AppContainer'
import LoginTop from './LoginTop'
import LoginBottom from './LoginBottom'

const Login = () => {

    return (
        <AppContainer>
            <LoginTop />
            <LoginBottom />
        </AppContainer>
    )
}

export default Login