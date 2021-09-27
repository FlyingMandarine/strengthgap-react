import React from 'react'

import AppContainer from '../presentational/AppContainer'
import Footer from '../presentational/Footer'

import SignUpTop from './SignUpTop'
import SignUpBottom from './SignUpBottom'

const SignUp = () => {

    return (
        <AppContainer>
            <SignUpTop />
            <SignUpBottom />
            <Footer />
        </AppContainer>
    )
}

export default SignUp