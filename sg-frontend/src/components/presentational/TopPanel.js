import React from 'react'

const TopPanel = (props) => {

    const topPanelStyle = {
        backgroundColor: props.bgColor,
        height: '50%',
        borderBottom: 'solid 2px black',
        borderRadius: '6px 6px 0 0'
    }

    return (
        <div style={topPanelStyle}>
            {props.children}
        </div>
    )
}

export default TopPanel