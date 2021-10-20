import React from 'react'

const MobileAppContainer = (props) => {

    const outerDivStyle = {
        display: 'flex',
        position: 'relative',
        height: '100vh',
    }

    const divStyle = {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',

        height: 857,
        width: 390,

        border: 'solid 3px black',
        borderRadius: 6,
        margin: 'auto',
    }

    return (
        <div style={ outerDivStyle }>
            <div style={ divStyle }>
                { props.children }
            </div>
        </div>
    )
}

export default MobileAppContainer