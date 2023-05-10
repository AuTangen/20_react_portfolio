import Header from './components/Header.js'
import Navigation from './components/Navigation.js'
import Footer from './components/Footer.js'

import Home from './pages/Home.js'
import About from './pages/About.js'
import { useState, useEffect } from 'react'




function App() {
  const logo = 'Porfolio'
  const [page, setPage] = useState('home')

  return (
    <>

    
     < Header logo={logo} /> 

     < Navigation page={page} setPage={setPage} />
    
      {/* {
        page === 'home' && <Home />
      }
      {
        page === 'about' && <About />
      }

      < Footer logo={logo}/> */}
    </>
  );
}

export default App;
