import React, { useState } from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import Tabs from './Tabs';

const IndexStyles = styled.div`
  padding: 30px;

  .tab-list {
    padding-bottom: 25px;
    cursor: pointer;
  }

  .tab-list-item {
    display: inline-block;
    list-style: none;
    margin-bottom: -1px;
    padding: 15px 30px;
    opacity: 0.25;
    border: 0.5px solid var(--black);
  }

  .tab-list-active {
    background-color: var(--black);
    border: solid var(--black);
    border-width: 1px 1px 0 1px;
    color: var(--white);
    opacity: 1;
  }

  .index__item {
    padding-top: 30px;
    border-bottom: solid 0.5px var(--black);
  }

  .index__details {
    padding-bottom: 60px;
  }

  li:nth-child(1) {
    grid-column: span 4;
  }
  li:nth-child(2) {
    grid-column: span 2;
  }
  li:nth-child(3) {
    grid-column: span 3;
  }
  li:nth-child(4) {
    grid-column: span 1;
  }
  li:nth-child(5) {
    grid-column: span 2;
  }
  li:nth-child(5) h4 {
    text-align: right;
  }

  h3 {
    position: relative;
    bottom: 7px;
  }

  p {
    grid-column: span 4;
  }

  .index__more h4 {
    grid-column-start: 7;
    grid-column-end: 11;
  }

  .index__more {
    padding-bottom: 40px;
  }

  .index__image {
    padding-bottom: 60px;
  }

  .gatsby-image-wrapper {
    grid-column-start: 7;
    grid-column-end: 11;
  }

  .hidden {
    display: none;
  }
`;

function IndexItem({ project }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div className="index__item">
      <ul
        style={isActive ? { paddingBottom: +60 } : { paddingBottom: +25 }}
        className="index__details site__grid"
      >
        <li>
          <h3>{project.title}</h3>
        </li>
        <li>
          <h4>{project.builder}</h4>
        </li>
        <li>
          <h4>{project.location}</h4>
        </li>
        <li>
          <h4>2022</h4>
        </li>
        <li>
          <h4>
            <button type="button" onClick={handleClick}>
              {isActive ? '- Less' : '+ More'}
            </button>
          </h4>
        </li>
      </ul>
      <div
        className={
          isActive ? 'index__more site__grid' : 'index__more site__grid  hidden'
        }
      >
        <p>
          A very brief description of what the project is, maybe how long it was
          in the works for, size of it, what it involves, how Sense applied
          their expertise, etc, etc.
        </p>
        <h4>{project.extent}</h4>
      </div>
      <div
        className={
          isActive
            ? 'index__image site__grid'
            : 'index__image site__grid hidden'
        }
      >
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
    </div>
  );
}

export default function ProjectsIndex({
  commercialProjects,
  civilProjects,
  resProjects,
}) {
  return (
    <IndexStyles>
      <Tabs>
        <div label="Commercial">
          {commercialProjects.map((project) => (
            <IndexItem key={project.id} project={project} />
          ))}
        </div>
        <div label="Commercial/Residential">
          {resProjects.map((project) => (
            <IndexItem key={project.id} project={project} />
          ))}
        </div>
        <div label="Civil">
          {civilProjects.map((project) => (
            <IndexItem key={project.id} project={project} />
          ))}
        </div>
      </Tabs>
    </IndexStyles>
  );
}
