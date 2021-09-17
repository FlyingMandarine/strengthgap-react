import React from 'react'
import MobileHomeBottom from './MobileHomeBottom'
import MobileHomeTop from './MobileHomeTop'

const MobileHome = () => {
    const divStyle = {
        backgroundColor: 'white',
        fontSize: 24,
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

        height: 857,
        width: 390,

        border: 'solid 3px black',
        borderRadius: 6
    }

    return (
        <div style={divStyle}>
            <MobileHomeTop />
            <MobileHomeBottom />
        </div>
    )
}

export default MobileHome