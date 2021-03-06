import React from 'react'

const MobileFooter = () => {

    const footerLinkStyle = {
        position: 'fixed',
        bottom: '-5%',
        left: '28%',
        fontSize: 13,
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

export default MobileFooter