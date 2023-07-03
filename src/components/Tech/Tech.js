import React from 'react'

import './Tech.css'

const Tech = () => {
  return (
    <section className='tech-section'>
      <div className="flex">
        <h3>TECH</h3>
      </div>
      <p>HTML, CSS, Flexbox, <span class="bolded-color">JavaScript</span> ES6, JSX, Cloudflare, <span
        class="bolded-color">React, React Hooks, Redux,</span></p>
      <p>Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.</p>
    </section>
  )
}

export default Tech