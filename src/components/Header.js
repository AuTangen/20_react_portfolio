import { useState, useEffect } from 'react'



function Header(props) {

    
  const showHome = () => {
    props.setPage('home')
}

const showAbout = () => {
    props.setPage('about')
};

const showPortfolio = () => {
    props.setPage('portfolio')
};

const showContact = () => {
    props.setPage('contact')
};
  
 

    return (
      <header>
        <h3 id="main-title"><span class="namespan">&lt;</span>Austen Tangen<span class="namespan">/&gt;</span></h3>
        <nav>
                <a className={props.page === 'home' ? 'active' : ''} onClick={(showHome)} href='#'>Home</a>
                <a className={props.page === 'about' ? 'active' : ''} onClick={(showAbout)} href='#'>About</a>
                <a className={props.page === 'portfolio' ? 'active' : ''} onClick={(showPortfolio)} href='#'>Portfolio</a>
                <a className={props.page === 'contact' ? 'active' : ''} onClick={(showContact)} href='#'>Contact</a>
            </nav>
          

      </header>
    )
  }
  
  export default Header;