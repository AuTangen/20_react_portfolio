import { useState, useEffect } from 'react'
function Contact() {
    return (
        <main className='main-container'>
            
            <form>
            <h1>Contact</h1>
                <input type='text' placeholder='Name'></input>
                <input type='email' placeholder='Email'></input>
                <textarea type='text' placeholder='Type a message'></textarea>
                <button>Send</button>
            </form>
            

          
        </main>
    )
}

export default Contact;