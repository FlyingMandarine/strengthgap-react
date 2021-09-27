import React from 'react'

import AppContainer from '../presentational/AppContainer'
import Footer from '../presentational/Footer'

import ProfileDeleteTop from './ProfileDeleteTop'
import ProfileDeleteBottom from './ProfileDeleteBottom'

const ProfileDelete = () => {

    return (
        <AppContainer>
            <ProfileDeleteTop />
            <ProfileDeleteBottom />
            <Footer />
        </AppContainer>
    )
}

export default ProfileDelete