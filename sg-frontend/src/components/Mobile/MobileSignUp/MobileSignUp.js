import React from 'react'

import MobileAppContainer from '../MobilePresentational/MobileAppContainer'
import MobileFooter from '../MobilePresentational/MobileFooter'

import MobileSignUpTop from './MobileSignUpTop'
import MobileSignUpBottom from './MobileSignUpBottom'

const SignUp = () => {

    return (
        <MobileAppContainer>
            <MobileSignUpTop />
            <MobileSignUpBottom />
            <MobileFooter />
        </MobileAppContainer>
    )
}

export default SignUp