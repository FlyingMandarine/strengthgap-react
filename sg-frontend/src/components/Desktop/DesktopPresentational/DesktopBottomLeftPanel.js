import React from 'react'

const DesktopBottomLeftPanel = (props) => {

    const divStyle = {
        position: 'absolute',
        bottom: 24,
        left: 0,
        width: '50%',
        textAlign: 'center',
    }

    const hrStyle = {
        backgroundColor: 'black',
        border: '1px solid black',
        height: 3,
    }

    return (
        <div style={ divStyle }>
            <hr style={ hrStyle } />
            { props.children }
        </div>
    )
}

export default DesktopBottomLeftPanel