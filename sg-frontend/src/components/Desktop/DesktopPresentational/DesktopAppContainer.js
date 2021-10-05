import React from 'react'

const DesktopAppContainer = (props) => {

    const divStyle = {
        backgroundColor: 'white',
        display: 'flex',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

        border: 'solid 3px black',
        borderRadius: 6,
    }

    return (
        <div style={ divStyle } className='desktop-container'>
            { props.children }
        </div>
    )
}

export default DesktopAppContainer