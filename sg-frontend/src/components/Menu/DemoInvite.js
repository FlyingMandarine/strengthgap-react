import React from 'react'
import { customTurquoise } from '../utils/colors'

const DemoInvite = ({ deactivateDemo }) => {

    const divStyle = {
        position: 'absolute',
        bottom: 0,
        fontSize: 12,
        color: 'white',
        backgroundColor: customTurquoise,
        width: '100%',
        height: 100,
    }

    const closeButtonStyle = {
        float: 'right',
        fontSize: 27,
        margin: '18px 18px 0 0',
    }

    const warningStyle = {
        fontWeight: 700,
    }

    const pStyle = {
        paddingLeft: 18,
        lineHeight: 2,
        fontWeight: 400,
    }

    const closeDemoInvite = () => {
        deactivateDemo()
    }

    return (
        <div style={ divStyle }>
            <i style={ closeButtonStyle } className='fas fa-times' onClick={ closeDemoInvite } />
            <p style={ pStyle }>
                <span style={ warningStyle }>Warning:</span><br />
                You won't be able to save this session unless you first log in.<br />
                Employer? Try this demo account.
            </p>
        </div>
    )
}

export default DemoInvite