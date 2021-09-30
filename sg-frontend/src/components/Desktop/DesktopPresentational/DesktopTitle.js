import React from 'react'

const DesktopTitle = ({ marginTop }) => {

    const titleStyle = {
        fontSize: 58,
        marginTop: marginTop,
        marginBottom: 16,
        fontWeight: 500,
    }

    return (
        <h1 style={ titleStyle }>Strength Gap</h1>
    )
}

export default DesktopTitle