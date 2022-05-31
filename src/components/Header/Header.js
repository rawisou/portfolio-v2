import React from 'react'
import Nav from '../Nav/Nav'
import LogoBox from '../LogoBox/LogoBox'

import './Header.css'

const Header = () => {
    return (
        <header id='headerSection'>
            <Nav />
            <LogoBox />
            <h2>RAWISARA S.</h2>
            <div className='center-elem-container'>
                <div className='text-box'>
                  <h1>FRONTEND <br /> DEVELOPER</h1>
                    <p>+ writer</p>
                    <p>+ fraud, risk and payments analyst</p>
                    <p>+ ecommerce support specialist</p>
                </div>
                <img className='profile-pic' src='./images/profile-pic-vert.svg' />
            </div>
            <div className='scroll-down-arrow'> 
            <p>Scroll down</p>
            <img src='./images/arrow-down.svg'/> 
            </div>
        </header>
    )
}

export default Header