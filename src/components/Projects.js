import React, { useState } from 'react'

const allProjects = [
  {
    projectName: 'TripBit',
    deployedLink: 'https://scratchmap.herokuapp.com',
    githubLink: 'https://github.com/georgpreuss/project-4',
    format: 'A GA group project built in 1 week',
    images: ['./images/project5_1.png', './images/project5_2.png'],
    technologiesUsed: ['devicon-python-plain', 'devicon-react-original', 'devicon-django-plain'],
    description: 'This is a mobile-friendly application built primarily with Django, PostgreSQL and React. Inspired by paper-based ‘scratch maps’, users collect badges and experience points based on the number of cities and countries they visit. Users can also create and join groups and where they can see who has traveled the most.'
  },
  {
    projectName: 'Gift List',
    deployedLink: 'https://giftlist.herokuapp.com',
    githubLink: 'https://github.com/georgpreuss/gift-list',
    format: 'A GA group project built in 1 week',
    images: ['./images/project4_1.gif'],
    technologiesUsed: ['devicon-react-original', 'devicon-nodejs-plain', 'devicon-mongodb-plain'],
    description: 'This is a fullstack application based on the MERN stack. Users can create and edit wish lists. Based on selected interests users are given recommendations of products available on etsy. These as well as manual entries can be added to a list.'
  },
  {
    projectName: 'Fetch',
    deployedLink: 'https://georgpreuss.com/project-fetch',
    githubLink: 'https://github.com/georgpreuss/project-fetch',
    format: 'A GA pair project built in 2 days',
    images: ['./images/project3_1.png', './images/project3_2.png'],
    technologiesUsed: ['devicon-react-original', 'devicon-nodejs-plain', 'devicon-webpack-plain'],
    description: 'This is a frontend application built with React where information is pulled from a publicly available API. Users can browse dogs and find out basic information about each dog, as well as add dogs to a favourites collection.'
  },
  {
    projectName: 'CrimeMapper',
    deployedLink: 'https://georgpreuss.com/project-x',
    githubLink: 'https://github.com/georgpreuss/project-x',
    format: 'A GA solo project built over a weekend',
    images: ['./images/project2_1.png', './images/project2_2.png'],
    technologiesUsed: ['devicon-react-original', 'devicon-nodejs-plain'],
    description: 'As the name suggests, this is an application that puts crime on a map. Based on Mapbox and a police API, users can interact with a map and draw polygons onto it to reveal the types of crimes in that area.'
  },
  {
    projectName: 'Operation Steel Sabre',
    deployedLink: 'https://georgpreuss.com/project-1',
    githubLink: 'https://github.com/georgpreuss/project-1',
    format: 'A GA solo project built in a week',
    images: ['./images/project1_1.png', './images/project1_2.png'],
    technologiesUsed: ['devicon-javascript-plain', 'devicon-html5-plain', 'devicon-css3-plain'],
    description: 'Based on the classic Battleship game, users can play against a computer opponent. After carefully planning your armada\'s location players can start firing torpedos at the enemy. Whoever manages to sink the opponent\'s fleet first wins.'
  },
  {
    projectName: 'Coming soon!',
    deployedLink: '',
    githubLink: '',
    format: 'One of hopefully many more projects to come',
    images: [],
    technologiesUsed: ['devicon-react-original', 'devicon-nodejs-plain'],
    description: 'I am currently working on a project that will combine my passion for climbing with my creativity. The plan is to build a piece of arduino hardware that will log and send data via BLE. In order to keep expanding my programming knowledge, I will build a React Native app for it.'
  }
]

const Projects = () => {

  const [project, setProject] = useState(0)

  const [projectContent, setProjectContent] = useState({
    projectName: 'TripBit',
    deployedLink: 'https://scratchmap.herokuapp.com',
    githubLink: 'https://github.com/georgpreuss/project-4',
    format: 'A GA group project built in 1 week',
    images: ['./images/project5_1.png', './images/project5_2.png'],
    technologiesUsed: ['devicon-react-original', 'devicon-python-plain', 'devicon-django-plain'],
    description: 'This is a mobile-friendly application built primarily with Django, PostgreSQL and React. Inspired by paper-based ‘scratch maps’, users collect badges and experience points based on the number of cities and countries they visit. Users can also create and join groups and where they can see who has traveled the most.'
  })

  const selectProject = (e) => {
    if (!e.target.id > 0) return
    setProject(parseInt(e.target.id))
    setProjectContent(allProjects[parseInt(e.target.id)])
  }

  return <>
    <div className="tabs is-centered">
      <ul>
        <li onClick={selectProject}><a><i className={project === 0 ? 'fas fa-circle' : 'far fa-circle'} id='0'></i></a></li>
        <li onClick={selectProject}><a><i className={project === 1 ? 'fas fa-circle' : 'far fa-circle'} id='1'></i></a></li>
        <li onClick={selectProject}><a><i className={project === 2 ? 'fas fa-circle' : 'far fa-circle'} id='2'></i></a></li>
        <li onClick={selectProject}><a><i className={project === 3 ? 'fas fa-circle' : 'far fa-circle'} id='3'></i></a></li>
        <li onClick={selectProject}><a><i className={project === 4 ? 'fas fa-circle' : 'far fa-circle'} id='4'></i></a></li>
        <li onClick={selectProject}><a><i className={project === 5 ? 'fas fa-circle' : 'far fa-circle'} id='5'></i></a></li>
      </ul>
    </div>

    <div className="tile is-ancestor">
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification is-light">
              <p className="title">{projectContent.projectName}</p>
            </article>
            <article className="tile is-child notification is-dark">
              <p className="subtitle">{projectContent.format}</p>
              <p>Links to application and repo: </p>
              <a target="_blank" rel="noopener noreferrer" href={projectContent.deployedLink}><i className="fas fa-link"></i></a>
              <a target="_blank" rel="noopener noreferrer" href={projectContent.githubLink}><i className="fab fa-github"></i></a>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-dark">
              <p className="subtitle">{projectContent.description}</p>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-dark">
            <div className="columns is-mobile is-multiline project-skills">
              {projectContent.technologiesUsed.map((tech, i) => {
                return <div className='column' key={i}>
                  <i className={tech}></i>
                </div>
              })}
            </div>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child notification is-dark screenshots">
          <div className="content">
            {projectContent.images.map((img, i) => {
              return <img src={img} key={i}/>
            })}
          </div>
        </article>
      </div>
    </div>

  </>
}

export default Projects