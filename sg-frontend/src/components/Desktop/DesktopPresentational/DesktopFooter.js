import React from 'react'

const DesktopFooter = () => {

    const footerLinkStyle = {
        position: 'fixed',
        bottom: '-10%',
        left: '40%',
        fontSize: 22,
        color: 'white',
        fontWeight: 400,
    }

    const footerAStyle = {
        color: 'white'
    }

    return (
        <p style={ footerLinkStyle } id="footer-link">A Tool by <a style={ footerAStyle } href="mailto:hermenaultpatrice@gmail.com">Patrice Hermenault</a></p>
    )
}

export default DesktopFooter