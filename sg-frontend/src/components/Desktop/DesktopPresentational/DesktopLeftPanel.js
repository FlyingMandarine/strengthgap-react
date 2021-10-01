import React from 'react'

const DesktopLeftPanel = ({ paddingLeft = 0, ...props }) => {

    const leftPanelStyle = {
        backgroundColor: props.bgColor,
        paddingLeft: paddingLeft,
        height: '100%',
        width: '50%',
        borderRight: 'solid 2px black',
        borderRadius: '6px 0 0 6px',
    }

    return (
        <div style={ leftPanelStyle }>
            { props.children }
        </div>
    )
}

export default DesktopLeftPanel