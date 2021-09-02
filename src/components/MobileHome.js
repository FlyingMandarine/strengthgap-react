import React from 'react'

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

    const topPanelStyle = {
        height: '50%',
        borderBottom: 'solid 2px black'
    }

    const bottomPanelStyle = {
        backgroundColor: '#f4f4f4',
        height: '50%',
        //padding: '0 29px',
        borderTop: 'solid 1px black'
    }

    const titleStyle = {
        fontSize: 34,
        paddingLeft: 24,
        marginTop: 70
    }

    const footerLinkStyle = {
        position: 'fixed',
        bottom: '-5%',
        left: '28%',

        fontSize: 13,
        color: 'white',
    }

    const footerAStyle = {
        color: 'white'
    }

    return(
        <div style={divStyle}>
            <div style={topPanelStyle}>
                <h1 style={titleStyle}>Strength Gap</h1>
            </div>
            <div style={bottomPanelStyle}>
                <p style={footerLinkStyle} id="footer-link">A Tool by <a style={footerAStyle} href="mailto:hermenaultpatrice@gmail.com">Patrice Hermenault</a></p>
            </div>
        </div>
    )
}

export default MobileHome