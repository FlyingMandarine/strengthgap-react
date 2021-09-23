import React from 'react'
import { customTurquoise } from '../utils/colors'

const DemoInvite = () => {

    const divStyle = {
        fontSize: 14,
        backgroundColor: customTurquoise,
        width: '100%',
    }

    return (
        <div style={ divStyle }>
            Warning:
            You won't be able to save this session unless you first log in.<br />
            Employer? Try this demo account.
        </div>
    )
}

export default DemoInvite