import React from 'react'
import TopPanel from './presentational/TopPanel'
import { MuscleMapBack, MuscleMapFront } from './MuscleMap'
import Title from './Title'

const MuscleMapContainer = () => {
    const muscleMapStyle = {
        //margin: '30px 0 22px'
    }

    return (
        <TopPanel>
            <Title />
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
        </TopPanel>
    )
}

export default MuscleMapContainer