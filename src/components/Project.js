import { useState, useEffect } from 'react'


function Project(props) {



    return (
        <section className='portfolio-container'>
            <div className='project-container'>
                <div className='img-wrap'>
                <a href="https://evening-everglades-03167.herokuapp.com/" target="_blank"><img className='zoom' src={require('../images/jate.png')} alt="jate text editor"></img></a>
                </div>
                <div className='descr-container'>
                    <div className='flex-row'>
                    <h3>Just Another Text Editor</h3>
                    <p className='descr-short'>Javascript PWA</p>
                    <p className='descr-hidden'>A text editor app that can be installed to your desktop</p>
                    </div>
                    <a href="https://github.com/AuTangen/JATE_text_editor" target="_blank"><img className="github" src={require('../images/github.png')} alt="github logo"></img></a>
                </div>
            </div>

            <div className='project-container'>
                <div className='img-wrap'>
                <a href="https://github.com/AuTangen/09_README_generator" target="_blank"><img className='zoom' src={require('../images/readmegen.png')} alt="readme generator"></img></a>
                </div>
                <div className='descr-container'>
                    <div className='flex-row'>
                    <h3>README Generator</h3>
                    <p className='descr-short'>Javascript CLI</p>
                    <p className='descr-hidden'>A command-line app that generates MKD documentation</p>
                    </div>
                    <a href="https://github.com/AuTangen/09_README_generator" target="_blank"><img className="github" src={require('../images/github.png')} alt="github logo"></img></a>
                </div>
            </div>

            <div className='project-container'>
                <div className='img-wrap'>
                <a href="https://warm-basin-11114.herokuapp.com/" target="_blank"><img className='zoom' src={require('../images/notetaker.png')} alt="note taker app"></img></a>
                </div>
                <div className='descr-container'>
                    <div className='flex-row'>
                    <h3>Note Taker App</h3>
                    <p className='descr-short'>Express Server</p>
                    <p className='descr-hidden'>A simple app to store notes and reminders</p>
                    </div>
                    <a href="https://github.com/AuTangen/11_Express_NoteTaker" target="_blank"><img className="github" src={require('../images/github.png')} alt="github logo"></img></a>
                </div>
            </div>

        </section>

    )
}

export default Project