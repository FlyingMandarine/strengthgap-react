import React from 'react'
import { customTurquoise } from '../../utils/colors'

const DesktopDemoInvite = ({ deactivateDemo }) => {

    const divStyle = {
        position: 'absolute',
        top: 46,
        left: '50.05%',
        color: 'white',
        backgroundColor: customTurquoise,
        fontSize: 14,
        width: 395,
        height: 90,
    }

    const warningStyle = {
        fontWeight: 700,
    }

    const pStyle = {
        paddingLeft: 14,
        lineHeight: 1.4,
        fontWeight: 400,
    }

    return (
        <div style={ divStyle }>
            <p style={ pStyle }>
                <span style={ warningStyle }>Warning:</span><br />
                You won't be able to save this session unless you first log in.<br />
                Employer? Try this demo account.
            </p>
        </div>
    )
}

export default DesktopDemoInvite