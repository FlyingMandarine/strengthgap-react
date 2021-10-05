import React from 'react'

const DesktopTitle = ({ fontSize, marginTop }) => {

    const titleStyle = {
        fontSize: fontSize,
        marginTop: marginTop,
        marginBottom: 16,
        fontWeight: 500,
    }

    return (
        <h1 style={ titleStyle } className='sg-title'>Strength Gap</h1>
    )
}

export default DesktopTitle