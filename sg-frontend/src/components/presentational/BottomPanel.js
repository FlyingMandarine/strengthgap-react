import React from 'react'

const BottomPanel = (props) => {

    const bottomPanelStyle = {
        height: '50%',
        padding: '0 29px',
        borderTop: 'solid 1px black'
    }

    return (
        <div style={bottomPanelStyle}>
            {props.children}
        </div>
    )
}

export default BottomPanel