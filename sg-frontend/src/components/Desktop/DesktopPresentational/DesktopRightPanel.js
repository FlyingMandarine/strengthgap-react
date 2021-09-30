import React from 'react'

const DesktopRightPanel = (props) => {

    const rightPanelStyle = {
        backgroundColor: props.bgColor,
        height: '100%',
        width: '50%',
        borderLeft: 'solid 1px black',
        padding: '0 29px',
        borderRadius: '0 6px 6px 0'
    }

    return (
        <div style={ rightPanelStyle }>
            { props.children }
        </div>
    )
}

export default DesktopRightPanel