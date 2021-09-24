import React from 'react'
import { customTurquoise } from '../utils/colors'

const DemoInvite = ({ deactivateDemo }) => {

    const divStyle = {
        fontSize: 12,
        color: 'white',
        backgroundColor: customTurquoise,
        width: '100%',
    }

    const closeButtonStyle = {
        float: 'right'
    }

    const closeDemoInvite = () => {
        deactivateDemo()
    }

    return (
        <div style={ divStyle }>
            <div style={ closeButtonStyle } onClick={ closeDemoInvite }>CLOSE</div>
            Warning:<br />
            You won't be able to save this session unless you first log in.<br />
            Employer? Try this demo account.
        </div>
    )
}

export default DemoInvite