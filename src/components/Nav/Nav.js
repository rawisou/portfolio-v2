import React from 'react'
import { Link } from 'react-scroll';

import "./Nav.css"
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="sectionHeader"
            spy={true}
            smooth={true}
            >
            </Link>
            HOME
        </li>
        <li>
          <Link
        activeClass="active"
            to="sectionHeader"
            spy={true}
            smooth={true}
            >
            </Link>
          ABOUT
          </li>
        <li>PORTFOLIO</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  )
}

export default Nav