import React from 'react'

import { featuredProjects, otherProjects } from '../../Utils/data'

import './Projects.css'



const Projects = () => {
  const allFeaturedProjects = featuredProjects.map((project) => {
    return (
      <article className='featured-projects-container' key={project.id}>
        <div className='featured-project-card'>
          <img className='featured-project-img' src={project.img} alt="project preview" />
          <a href={project.netlify}><div className='overlay-card'></div></a>
          <div className='text-overlay'>
            <h4>{project.title}</h4>
          </div>
        </div>
        <div className='text-box'>
          <h5>{project.name}</h5>
          <p>{project.description}</p>
          <a href={project.github}><p className='view-code'>View code</p></a>
          <div className='tags'>
            {project.tags.map((tag) => <p>{tag}</p>)}
          </div>
        </div>
      </article>
    )
  })

  const allOtherProjects = otherProjects.map((project) => {
    return (
      <div>
        <div>
          <a className='other-project-link' href={project.netlify} target="_blank" rel="noopener noreferrer">
            <h5>{project.project} <span> {project.description} </span> >> </h5>
          </a>
          <div className='tags'>
            {project.tags.map((tag) => <p>{tag}</p>)}
          </div>
        </div>
      </div>
    )
  })

  return (
    <section className='projects-section' id='projectSection'>
            <div className="flex">
        <h3>Featured Projects</h3>
      </div>
      <div className='grid'>
      {allFeaturedProjects}
      </div>
      <div className="flex">
        <h3>Other Projects</h3>
      </div>
      {allOtherProjects}
      <a href='https://www.frontendmentor.io/profile/rawisou'><h5>Frontend mentor challenges >></h5></a>
    </section>
  )
}

export default Projects
