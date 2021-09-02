import React from 'react'
import { MuscleMapBack, MuscleMapFront } from './MuscleMap'

const MuscleMapContainer = () => {
    const muscleMapStyle = {
        margin: '30px 0 22px'
    }

    return (
        <div>
            <div style={muscleMapStyle}>
                <MuscleMapFront mapPosition={'top-left'} />
                <MuscleMapBack mapPosition={'top-left'} />
                <MuscleMapFront mapPosition={'top-middle'} />
                <MuscleMapBack mapPosition={'top-right'} />
                <MuscleMapFront mapPosition={'top-right'} />
            </div>
            <div>
                <MuscleMapFront mapPosition={'bottom-left'} />
                <MuscleMapBack mapPosition={'bottom-left'} />
                <MuscleMapFront mapPosition={'bottom-middle'} />
                <MuscleMapBack mapPosition={'bottom-right'} />
                <MuscleMapFront mapPosition={'bottom-right'} />
            </div>
        </div>
    )
}

export default MuscleMapContainer