import React from 'react'
import LogoBox from '../LogoBox/LogoBox'

import Nav from '../Nav/Nav'

import './Header.css'

const Header = () => {
    return (
        <header id='headerSection'>
            <Nav />
            <h1>PORTFOLIO: RAWISARA</h1>
            <LogoBox />
            <div className='center-elem-container'>
                <div className='text-box'>
                  <h2>FRONTEND <br /> DEVELOPER</h2>
                    <p>+ writer</p>
                    <p>+ fraud, risk and payments analyst</p>
                    <p>+ ecommerce support specialist</p>
                </div>
                <img className='profile-pic' src='./images/profile-pic-vert.svg'  alt='profile'/>
            </div>
            <div className='scroll-down-arrow'> 
            <p>Scroll down</p>
            <img src='./images/arrow-down.svg'  alt='arrow'/> 
            </div>
        </header>
    )
}

export default Header