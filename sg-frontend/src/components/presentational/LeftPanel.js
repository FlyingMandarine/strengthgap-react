import React from 'react'

const LeftPanel = (props) => {

    const leftPanelStyle = {
        backgroundColor: props.bgColor,
        height: '100%',
        width: '50%',
        borderRight: 'solid 2px black',
        borderRadius: '6px 0 0 6px'
    }

    return (
        <div style={ leftPanelStyle }>
            { props.children }
        </div>
    )
}

export default LeftPanel