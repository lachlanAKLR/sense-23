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

  .op__project h1 {
    display: none;
  }

  .grid__wrap-top {
    position: absolute;
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    top: 0;
    left: 0;
  }

  .grid__wrap-top h1 {
    width: 90%;
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

  .gatsby-image-wrapper {
    height: 450px;
  }
  /* Mobile Styles */
  @media only screen and (max-width: 1100px) {
    padding: 30px 0;
    .site__grid {
      display: block;
    }
    .op__top {
      padding: 10px 10px 40px 10px;
    }
    .op__title h4 {
      padding-bottom: 20px;
    }
    .op__title h1 {
      padding-bottom: 20px;
    }
    .op__text p {
      padding: 0 0 20px 0;
    }
    .op__project {
      padding-left: 10px;
      width: 85%;
    }
    .op__project p {
      padding: 20px 0;
    }

    .gatsby-image-wrapper {
      height: 250px;
    }
  }
`;

function SingleProject({ project }) {
  return (
    <div className="op__project">
      <Link to={`/project/${project.slug.current}`}>
        <div className="grid__image-wrap">
          <div className="grid__wrap-text">
            <div className="grid__wrap-top">
              <h1>{project.title}</h1>
              <h4>+ More</h4>
            </div>
            <div className="grid__wrap-bottom">
              <h4>Builder: {project.builder}</h4>
              <h4>• {project.work}</h4>
            </div>
          </div>
          <GatsbyImage
            image={project.image.asset.gatsbyImageData}
            alt={`image of ${project.title}`}
            style={{
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </Link>
      <Link to={`/project/${project.slug.current}`}>
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
      <div
        className="op__top site__grid"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <div className="op__title">
          <h4>Our Projects</h4>
          <h2>{data.sanityHome.projectsTitle}</h2>
        </div>
        <div className="op__text">
          <p>{data.sanityHome.projectsText}</p>
          <Link to="/projects">
            <h4>
              <span className="page__link">+</span>
              <span className="link__text">See More</span>
            </h4>
          </Link>
        </div>
      </div>

      <div
        className="op__wrapper"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <div className="op__inner">
          {ourProjects.slice(0, 4).map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </OurProjectStyles>
  );
}
