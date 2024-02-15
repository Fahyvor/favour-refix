import React from 'react'
import Nav from './components/Nav/Nav'
import Body from './components/Body/Body'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Experience from './components/Experience/Experience'
import Success from './components/Success/Success'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Body />
      <Services />
      <Portfolio />
      <Experience />
      <Success />
      <Contact />
      <Footer />
    </div>
  )
}

export default App