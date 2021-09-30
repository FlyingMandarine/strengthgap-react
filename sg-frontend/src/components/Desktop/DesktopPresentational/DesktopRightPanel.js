import React from 'react'

const DesktopRightPanel = (props) => {

    const rightPanelStyle = {
        backgroundColor: props.bgColor,
        textAlign: 'center',
        height: '100%',
        width: '50%',
        borderLeft: 'solid 1px black',
        borderRadius: '0 6px 6px 0',
    }

    return (
        <div style={ rightPanelStyle }>
            { props.children }
        </div>
    )
}

export default DesktopRightPanel