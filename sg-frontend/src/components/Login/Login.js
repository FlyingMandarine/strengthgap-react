import React from 'react'

import AppContainer from '../presentational/AppContainer'
import LoginTop from './LoginTop'
import LoginBottom from './LoginBottom'
import Footer from '../presentational/Footer'

const Login = () => {

    return (
        <>
            <AppContainer>
                <LoginTop />
                <LoginBottom />
                <Footer />
            </AppContainer>
        </>
    )
}

export default Login