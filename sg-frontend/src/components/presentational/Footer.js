import React from 'react'

const Footer = () => {

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

    return (
        <p style={ footerLinkStyle } id="footer-link">A Tool by <a style={ footerAStyle } href="mailto:hermenaultpatrice@gmail.com">Patrice Hermenault</a></p>
    )
}

export default Footer