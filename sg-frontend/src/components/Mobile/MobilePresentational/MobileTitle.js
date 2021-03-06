import React from 'react'

const MobileTitle = ({ marginTop }) => {

    const titleStyle = {
        fontSize: 34,
        paddingLeft: 24,
        marginTop: marginTop,
        fontWeight: 500,
    }

    return (
        <h1 style={ titleStyle }>Strength Gap</h1>
    )
}

export default MobileTitle