import Header from './components/Header.js'

import Footer from './components/Footer.js'

import Home from './pages/Home.js'
import About from './pages/About.js'
import Portfolio from './pages/Portfolio.js'
import Contact from './pages/Contact.js'
import { useState, useEffect } from 'react'




function App() {
  const title = 'Portfolio'
  const [page, setPage] = useState('home')

  return (
    <>

    
     < Header page={page} setPage={setPage} title={title} /> 

      
      {
        page === 'home' && <Home />
      }
      {
        page === 'about' && <About />
      }
      {
        page === 'portfolio' && <Portfolio />
      } 
      {
        page === 'contact' && <Contact />
      } 

      {/* < Footer logo={logo}/>  */}
    </>
  );
}

export default App;
