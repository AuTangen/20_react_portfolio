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
        <h2 id="main-title">Austen | Tangen</h2>
        <nav>
                <a className={props.page === 'home' ? 'active' : ''} onClick={(showHome)} href='#'><span className={`navspan + ${props.page === 'home' ? 'active' : ''}`}>&lt;</span>Home<span class={`navspan + ${props.page === 'home' ? 'active' : ''}`}>/&gt;</span></a>
                <a className={props.page === 'about' ? 'active' : ''} onClick={(showAbout)} href='#'><span className={`navspan + ${props.page === 'about' ? 'active' : ''}`}>&lt;</span>About<span class={`navspan + ${props.page === 'about' ? 'active' : ''}`}>/&gt;</span></a>
                <a className={props.page === 'portfolio' ? 'active' : ''} onClick={(showPortfolio)} href='#'><span className={`navspan + ${props.page === 'portfolio' ? 'active' : ''}`}>&lt;</span>Portfolio<span class={`navspan + ${props.page === 'portfolio' ? 'active' : ''}`}>/&gt;</span></a>
                <a className={props.page === 'contact' ? 'active' : ''} onClick={(showContact)} href='#'><span className={`navspan + ${props.page === 'contact' ? 'active' : ''}`}>&lt;</span>Contact<span class={`navspan + ${props.page === 'contact' ? 'active' : ''}`}>/&gt;</span></a>
            </nav>

      </header>
    )
  }
  
  export default Header;