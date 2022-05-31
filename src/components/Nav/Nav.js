import React from 'react'

import "./Nav.css"
const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href='#headerSection'> HOME </a> </li>
        <li><a href='#introSection'> ABOUT </a></li>
        <li><a href='#projectSection'> PROJECTS</a></li>
        <li><a href='#contactSection'> CONTACT </a></li>
      </ul>
    </nav>
  )
}

export default Nav