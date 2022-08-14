import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const OurProjectStyles = styled.div`
  padding: 200px 0 150px 0;
  .op__inner::-webkit-scrollbar {
    display: none;
  }
  p {
    padding-top: 30px;
  }
  .op__title {
    padding-bottom: 30px;
  }
  .op__inner {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .op__project {
    flex: 0 0 auto;
    width: 45%;
    padding-left: 30px;
  }

  .op__top {
    padding: 0 30px 70px 30px;
  }

  .op__title {
    grid-column: span 6;
  }

  .op__title h4 {
    padding-bottom: 30px;
  }

  .op__text {
    grid-column: span 5;
  }
  p {
    padding-bottom: 30px;
  }
`;

function SingleProject({ project }) {
  return (
    <div className="op__project">
      <Link to={`/project/${project.slug.current}`}>
        <GatsbyImage
          image={project.image.asset.gatsbyImageData}
          alt={`image of ${project.title}`}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
        <p>{project.title}</p>
      </Link>
    </div>
  );
}

export default function OurProjects({ ourProjects }) {
  const data = useStaticQuery(graphql`
    query homeQuery {
      sanityHome {
        projectsTitle
        projectsText
      }
    }
  `);
  return (
    <OurProjectStyles>
      <div className="op__top site__grid">
        <div className="op__title">
          <h4>Our Projects</h4>
          <h2>{data.sanityHome.projectsTitle}</h2>
        </div>
        <div className="op__text">
          <p>{data.sanityHome.projectsText}</p>
          <Link to="/projects">
            <h4>See More +</h4>
          </Link>
        </div>
      </div>

      <div className="op__wrapper">
        <div className="op__inner">
          {ourProjects.slice(0, 4).map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </OurProjectStyles>
  );
}
