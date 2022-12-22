import React from 'react'
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import Projects from './components/Projects/Projects'
import Tech from './components/Tech/Tech'
import Skills from './components/Skills/Skills'
import Articles from './components/Articles/Articles'
import Contact from './components/Contact/Contact'


const App = () => {

  return (
    <main>
      <Header/>
      <Introduction/>
      <div className="flex">
        <h3>TECH</h3>
      </div>
      <Tech/>
      <Projects />
      <Skills/>
      <Articles/>
      <Contact/>
    </main>
  )
}

export default App