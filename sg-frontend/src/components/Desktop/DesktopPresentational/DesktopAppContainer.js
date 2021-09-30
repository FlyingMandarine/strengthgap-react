import React from 'react'

const DesktopAppContainer = (props) => {

    const divStyle = {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

        height: 870,
        width: 1400,

        border: 'solid 3px black',
        borderRadius: 6
    }

    return (
        <div style={ divStyle }>
            { props.children }
        </div>
    )
}

export default DesktopAppContainer