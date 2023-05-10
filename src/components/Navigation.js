import { useState, useEffect } from 'react'

function Navigation(props) {

    const showHome = () => {
        props.setPage('home')
    }

    const showAbout = () => {
        props.setPage('about')

        return (
        <>
        <h1> is this working?</h1>
            <nav>
                <a className={props.page === 'home' ? 'active' : ''} onClick={(showHome)} href='#'>Home</a>
                <a className={props.page === 'about' ? 'active' : ''} onClick={(showAbout)} href='#'>About</a>
            </nav>
        </>
        )

    };

}

export default Navigation;