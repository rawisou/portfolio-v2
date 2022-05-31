import React from 'react'

import './LogoBox.css'

const LogoBox = () => {
    return (
        <div className='logo-box'>
            <a href="https://www.linkedin.com/in/rawisara-saman-566b3121b/">
                <img src="./images/linkedin-header.svg" alt="Linkedin" />
            </a>
            <a href="https://github.com/rawisou">
                <img src="./images/github-header.svg" alt="Github" />
            </a>
            <a href="https://www.frontendmentor.io/profile/rawisou">
                <img src="./images/frontendmentor-header.svg" alt="Frontend mentor" />
            </a>
        </div>
    )
}

export default LogoBox