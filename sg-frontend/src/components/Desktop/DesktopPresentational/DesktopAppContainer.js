import React from 'react'

const DesktopAppContainer = (props) => {

    const outerDivStyle = {
        display: 'flex',
        position: 'relative',
        height: '100vh',
    }

    const divStyle = {
        backgroundColor: 'white',
        display: 'flex',
        position: 'relative',
        border: 'solid 3px black',
        borderRadius: 6,
        margin: 'auto',
    }

    return (
        <div style={ outerDivStyle }>
            <div style={ divStyle } className='desktop-container'>
                { props.children }
            </div>
        </div>
    )
}

export default DesktopAppContainer