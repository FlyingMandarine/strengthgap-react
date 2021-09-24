import React from 'react'

const TopPanel = (props) => {

    const topPanelStyle = {
        backgroundColor: props.bgColor,
        height: '50%',
        borderBottom: 'solid 2px black'
    }

    return (
        <div style={topPanelStyle}>
            {props.children}
        </div>
    )
}

export default TopPanel