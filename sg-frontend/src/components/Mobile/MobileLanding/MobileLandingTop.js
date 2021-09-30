import React from 'react'

import MobileMuscleMapContainer from '../MobileMuscleMap/MobileMuscleMapContainer'
import MobileTopPanel from '../MobilePresentational/MobileTopPanel'

const MobileLandingTop = () => {
    return (
        <MobileTopPanel bgColor={ '#f4f4f4' }>
            <MobileMuscleMapContainer />
        </MobileTopPanel>
    )
}

export default MobileLandingTop