import React from 'react'

import AppContainer from '../presentational/AppContainer'
import MobileHomeBottom from './MobileHomeBottom'
import MobileHomeTop from './MobileHomeTop'

const MobileHome = () => {

    return (
        <AppContainer>
            <MobileHomeTop />
            <MobileHomeBottom />
        </AppContainer>
    )
}

export default MobileHome