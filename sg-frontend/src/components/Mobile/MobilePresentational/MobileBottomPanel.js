import React from 'react'

const MobileBottomPanel = (props) => {

    const bottomPanelStyle = {
        backgroundColor: props.bgColor,
        height: '50%',
        borderTop: 'solid 1px black',
        padding: '0 29px',
        borderRadius: '0 0 6px 6px'
    }

    return (
        <div style={ bottomPanelStyle }>
            { props.children }
        </div>
    )
}

export default MobileBottomPanel