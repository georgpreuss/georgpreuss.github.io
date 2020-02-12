import React, { useState, useEffect } from 'react'
import Skills from './Skills'
import Projects from './Projects'

const Hero = () => {

  const [offset, setOffset] = useState(0)

  const parallaxShift = () => {
    setOffset(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', parallaxShift)
  }, [offset])


  return <>

    {/* HERO */}

    <section className="hero is-light is-fullheight fractal" style={{ backgroundPositionY: -offset / 2 }}>

      <div className="hero-body">
        {/* bottom offset not required?? */}
        <div className="container has-text-centered">
          {/* <div className="container has-text-centered" style={{ bottom: offset }}> */}
          <h1 className="title">
            GEORG PREUSS
          </h1>
          <h2 className="subtitle">
            WEB DEVELOPER | CLIMBER | BIKE BUILDER
          </h2>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              {/* <li className="is-active"><a href="#about">about</a></li> */}
              <li><a href="#about">about</a></li>
              <li><a href="#skills">skills</a></li>
              <li><a href="#projects">projects</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    {/* ABOUT */}

    <section
      className='hero is-fullheight'
      id='about'
      // style={{ backgroundPositionY: -offset / 5 }}
      // style={{ backgroundPositionY: -offset / 2 }}
    >

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            ABOUT
          </h1>
          <p>Technology has always fascinated me. Working for a technology consultancy gave me great insight into a variety of emerging industries and businesses. My role as an analyst provided an opportunity to teach myself Python and I quickly learned the benefits of using programming to work more efficiently. Recognising that coding would not only challenge me with logical puzzles but also let me apply my creativity, I enrolled in General Assembly’s immersive Software Engineering course with the hope of taking this passion further professionally.</p>
          <br/>
          <p>In my spare time I like to be creative or active. I love working with my hands and learning new skills. I have built two bicycles from scratch: one made of bamboo and the other a fillet-brazed steel frame for which I also laced a set of wheels. I am currently building a workbench as well as the 'jig' in order to build more bicycles. I am also a very keen lead climber and boulderer and am currently working up the guts to try out trad climbing.</p>
        </div>
      </div>
    </section>

    {/* SKILLS */}

    <section
      className='hero is-fullheight skills'
      id="skills"
      // style={{ backgroundPositionY: -offset / 2 }}
    >
      <div className="hero-body">
        {/* bottom offset not required?? */}
        {/* <div className="container has-text-centered"> */}
        <div className="container has-text-centered">
          <h1 className="title">
            SKILLS
          </h1>
          <Skills />
        </div>


      </div>
    </section>

    {/* PROJECTS */}

    <section
      className='hero is-fullheight'
      id="projects"
      style={{ backgroundPositionY: -offset / 2 }}
    >
      <div className="hero-body">
        {/* bottom offset not required?? */}
        {/* <div className="container has-text-centered"> */}
        <div className="container has-text-centered">
          <h1 className="title">
            PROJECTS
          </h1>
          <Projects />
        </div>
      </div>
    </section>

    {/* CONTACT */}

    <section
      className='hero is-fullheight contact'
      id="contact"
      // style={{ backgroundPositionY: -offset / 2 }}
    >
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            CONTACT
          </h1>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/georgpreuss"><h2 className="subtitle"><i className="devicon-github-plain"></i>github.com/georgpreuss</h2></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/georgpreuss/"><h2 className="subtitle"><i className="fab fa-linkedin"></i>linkedin.com/in/georgpreuss</h2></a>
        </div>
      </div>
    </section>
  </>

}

export default Hero