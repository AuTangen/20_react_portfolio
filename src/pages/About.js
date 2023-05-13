import { useState, useEffect } from 'react'
function About() {
    return (
        <main className='main-container'>

            <div className='about-wrap'>

                {/* <img id='profile' src={require('../images/profile.png')} alt="profile picture"></img> */}
                <div className='bio-wrap'>
                    <div className='biotitle-wrap'>
                    <h1>Hi, I'm Austen </h1>
                    <p className='titlesub'>former brewer - turned web developer</p>
                    </div>
                    <div className='p-container'>
                    <p>Lorem ipsum dolor sit amet, partem indoctum rationibus per ea, pro impetus scripserit id. Ea enim ullamcorper consequuntur vel. Vis suavitate maiestatis in, eam inimicus theophrastus no, dicunt habemus assueverit eum et. Ei probo virtute cum, epicuri euripidis omittantur vix te. Vero autem scriptorem an vix.</p>
                    <p>Cu commodo propriae menandri sit. No cetero civibus quo, ex sed bonorum vivendum. Cu qui omnes congue. Quo id errem eripuit neglegentur, ei vix probo expetendis, senserit definitionem no eum. Pri tota quas et, ea nam solum latine, magna minim ignota eam ne.</p>
                    </div>
                </div>
            </div>
<section className='prof-container'>
<div className='frontend-container'>
<h3>Frontend Proficiencies</h3>
<ul className='prof-list'>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>JQuery</li>
    <li>React</li>

</ul>
</div>

<div className='backend-container'>
<h3>Backend Proficiencies</h3>
    <li>APIs</li>
    <li>Node</li>
    <li>MySQL / Sequelize</li>
    <li>MongoDB / Mongoose</li>
    <li>GraphQL</li>
</div>
</section>
        </main>
    )
}

export default About;