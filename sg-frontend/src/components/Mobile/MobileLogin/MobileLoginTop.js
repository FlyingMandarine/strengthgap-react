import React from 'react'

import MobileTopPanel from '../MobilePresentational/MobileTopPanel'
import MobileMuscleMapContainer from '../MobileMuscleMap/MobileMuscleMapContainer'

const MobileLoginTop = () => {
    return (
        <MobileTopPanel bgColor={ '#f4f4f4' }>
            <MobileMuscleMapContainer />
        </MobileTopPanel>
    )
}

export default MobileLoginTop