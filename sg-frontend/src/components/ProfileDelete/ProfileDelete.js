import React from 'react'

import AppContainer from '../presentational/AppContainer'
import ProfileDeleteTop from './ProfileDeleteTop'
import ProfileDeleteBottom from './ProfileDeleteBottom'

const ProfileDelete = () => {

    return (
        <AppContainer>
            <ProfileDeleteTop />
            <ProfileDeleteBottom />
        </AppContainer>
    )
}

export default ProfileDelete