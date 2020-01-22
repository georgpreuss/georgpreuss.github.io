import React, { useState, useEffect } from 'react'

const Hero = () => {

  const [offset, setOffset] = useState(0)

  const parallaxShift = () => {
    setOffset(window.pageYOffset)
    console.log(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', parallaxShift)
  }, [offset])


  return <>
    <section className="hero is-light is-fullheight" style={{ backgroundPositionY: -offset / 2 }}>

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
        <nav className="tabs is-boxed is-fullwidth" style={{ bottom: offset }}>
          <div className="container">
            <ul>
              <li className="is-active"><a>about</a></li>
              <li><a>projects</a></li>
              <li><a>experience</a></li>
              <li><a>contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section
      className='hero is-fullheight'
      style={{ backgroundPositionY: -offset / 2 }}
    >
      <div className="hero-head">
        {/* bottom offset not required?? */}
        {/* <div className="container has-text-centered"> */}
        <div className="container has-text-centered">
          <h1 className="title">
            ABOUT
          </h1>
        </div>
      </div>
      {/* <div
        className='my-title'
        style={{ bottom: offset }}
      >
        <h1 className='title'>Georg Preuss</h1>
        <h2 className='subtitle'>Web developer | climber | bike builder</h2>
      </div> */}
    </section>
    <section
      className='hero is-fullheight'
      style={{ backgroundPositionY: -offset / 2 }}
    >
      <div className="hero-head">
        {/* bottom offset not required?? */}
        {/* <div className="container has-text-centered"> */}
        <div className="container has-text-centered">
          <h1 className="title">
            PROJECTS
          </h1>
        </div>
      </div>
      {/* <div
        className='my-title'
        style={{ bottom: offset }}
      >
        <h1 className='title'>Georg Preuss</h1>
        <h2 className='subtitle'>Web developer | climber | bike builder</h2>
      </div> */}
    </section>
  </>

}

export default Hero