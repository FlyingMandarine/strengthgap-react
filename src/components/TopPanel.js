import React from 'react'
import MuscleMapContainer from './MuscleMapContainer'

const TopPanel = () => {
    const titleStyle = {
        fontSize: 34,
        paddingLeft: 24,
        marginTop: 70
    }

    const topPanelStyle = {
        backgroundColor: '#f4f4f4',
        height: '50%',
        borderBottom: 'solid 2px black'
    }

    return (
        <div style={topPanelStyle}>
            <h1 style={titleStyle}>Strength Gap</h1>
            <MuscleMapContainer />
        </div>
    )
}

export default TopPanel