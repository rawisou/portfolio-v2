import React from 'react'
import LogoBox from '../LogoBox/LogoBox'
import Tech from '../Tech/Tech'

import Nav from '../Nav/Nav'

import './Header.css'

const Header = () => {
    return (
        <header id='headerSection'>
            <Nav />
            <LogoBox />
            <div className='center-elem-container'>
                <div className='text-box'>
                  <h1>FRONTEND <br /> DEVELOPER</h1>
                    <p>+ Technical Product Specialist (AdTech, MarTech)</p>
                    <p>+ Ecommerce speciliast</p>
                    <p>+ Briding the gap between the tech and non-tech side of a product</p>
                    <p>+ Aspiring writer</p>
                </div>
                <img className='profile-pic' src='./images/profile-pic-vert.svg'  alt='profile'/>
            </div>
            <div className='scroll-down-arrow'> 
            <p>Scroll down</p>
            <img src='./images/arrow-down.svg'  alt='arrow'/> 
            </div>
            <Tech />
        </header>
    )
}

export default Header