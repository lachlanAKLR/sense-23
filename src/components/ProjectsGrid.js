import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProjectsGridStyles = styled.div`
  padding: 110px 0 140px 0;

  h2 {
    padding-left: 30px;
    grid-column: span 4;
  }

  h3 {
    padding-top: 15px;
    font-weight: normal;
  }

  .grid__sector {
    padding-top: 150px;
  }

  .grid__image-wrap {
    position: relative;
    color: var(--white);
  }

  .grid__wrap-text {
    opacity: 0;
  }

  .grid__image-wrap:hover > .grid__wrap-text {
    opacity: 1;
  }

  .grid__image-wrap:hover:after {
    opacity: 1;
  }

  .grid__image-wrap:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--black);
    opacity: 0;
    content: '';
    z-index: 1;
    transition: opacity ease 0.3s;
  }

  .grid__project h1 {
    display: none;
  }

  .grid__wrap-top {
    position: absolute;
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 2;
    top: 0;
    left: 0;
  }

  .grid__wrap-top h1 {
    width: 90%;
  }

  .grid__wrap-top h4 {
    padding-top: 10px;
  }

  .grid__wrap-bottom h4 {
    width: 50%;
  }

  .grid__wrap-bottom {
    width: 100%;
    padding: 20px;
    display: flex;
    position: absolute;
    z-index: 2;
    bottom: 0px;
  }

  .grid__project {
    position: relative;
    grid-column: span 4;
    padding-top: 100px;
  }

  .grid__project:nth-child(2) {
    grid-column-start: 5;
    grid-column-end: 13;
    padding-top: 0;
  }

  .grid__project:nth-child(2) h1 {
    display: block;
  }

  .grid__project:nth-child(3) {
    grid-column: span 5;
    padding-top: 100px;
  }

  .grid__project:nth-child(4) {
    grid-column-start: 8;
    grid-column-end: 12;
    padding-top: 400px;
  }

  .grid__project:nth-child(5) {
    grid-column-start: 2;
    grid-column-end: 8;
    padding-top: 100px;
  }

  .grid__project:nth-child(6) {
    grid-column-start: 5;
    grid-column-end: 13;
    padding-top: 150px;
  }

  .grid__project:nth-child(7) {
    grid-column-start: 1;
    grid-column-end: 8;
    padding-top: 150px;
  }

  .grid__project:nth-child(8) {
    grid-column-start: 5;
    grid-column-end: 10;
    padding-top: 150px;
  }

  .grid__project:nth-child(3) h3,
  .grid__project:nth-child(7) h3 {
    padding-left: 30px;
  }

  .bullet {
    position: relative;
    left: -16px;
    margin-right: -11px;
  }

  /* Mobile Styles */
  @media only screen and (max-width: 1100px) {
    padding: 30px 0 30px 0;
    .site__grid {
      display: block;
    }
    h2,
    .projects__left {
      padding-bottom: 30px;
    }

    h2 {
      padding-left: 10px;
    }
    h3 {
      font-size: 18px;
    }
    .grid__project:nth-child(2) {
      padding-left: 15%;
    }
    .grid__project:nth-child(3) {
      padding-top: 80px;
      padding-right: 5%;
    }
    .grid__project:nth-child(3) h3 {
      padding-left: 10px;
    }
    .grid__project:nth-child(4) {
      padding-top: 80px;
      padding-right: 5%;
      padding-left: 20%;
    }

    .grid__sector:first-of-type {
      padding-top: 0;
    }
    .grid__sector {
      padding-top: 70px;
    }
  }
`;

function SingleProject({ project }) {
  return (
    <div className="grid__project">
      <Link to={`/project/${project.slug.current}`}>
        <div className="grid__image-wrap">
          <div className="grid__wrap-text">
            <div className="grid__wrap-top">
              <h1>{project.title}</h1>
              <h4>+ More</h4>
            </div>
            <div className="grid__wrap-bottom">
              <h4>Builder: {project.builder}</h4>
              <h4>
                <span className="bullet">•</span>
                {project.work}
              </h4>
            </div>
          </div>
          <GatsbyImage
            image={project.image.asset.gatsbyImageData}
            alt={`image of ${project.title}`}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </div>
      </Link>
      <Link to={`/project/${project.slug.current}`}>
        <h3>{project.title}</h3>
      </Link>
    </div>
  );
}

export default function ProjectsGrid({
  commercialProjects,
  civilProjects,
  resProjects,
}) {
  return (
    <ProjectsGridStyles>
      <div className="grid__sector">
        <div className="grid__sector-inner site__grid">
          <h2>COMMERCIAL</h2>
          {commercialProjects.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="grid__sector">
        <div className="grid__sector-inner site__grid">
          <h2>
            COMMERCIAL/
            <br />
            RESIDENTIAL
          </h2>
          {resProjects.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="grid__sector">
        <div className="grid__sector-inner site__grid">
          <h2>CIVIL</h2>
          {civilProjects.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </ProjectsGridStyles>
  );
}
