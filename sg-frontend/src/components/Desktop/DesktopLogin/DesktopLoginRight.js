import React from 'react'

import DesktopRightPanel from '../DesktopPresentational/DesktopRightPanel'
import DesktopMuscleMapContainer from '../DesktopMuscleMap/DesktopMuscleMapContainer'

const DesktopLoginRight = () => {
    return (
        <DesktopRightPanel bgColor={ '#f4f4f4' }>
            <DesktopMuscleMapContainer />
        </DesktopRightPanel>
    )
}

export default DesktopLoginRight