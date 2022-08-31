import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

const MoreProjectStyles = styled.div`
  padding: 200px 30px 150px 30px;
  p {
    padding-top: 30px;
  }
  .mp__title {
    padding-bottom: 30px;
  }
  .mp__inner {
    display: flex;
    gap: 30px;
  }
  .mp__project {
    width: 25%;
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

  .mp__project h1 {
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

  @media only screen and (max-width: 1100px) {
    padding: 80px 0 80px 10px;

    .mp__inner::-webkit-scrollbar {
      display: none;
    }
    .mp__inner {
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 10px;
    }

    .mp__project {
      flex: 0 0 auto;
      width: 65%;
    }

    .mp__project .gatsby-image-wrapper {
      height: auto !important;
    }
  }
`;

function SingleProject({ project }) {
  return (
    <div className="mp__project">
      <Link to={`/project/${project.slug.current}`}>
        <div className="grid__image-wrap">
          <div className="grid__wrap-text">
            <div className="grid__wrap-top">
              <h1>{project.title}</h1>
              <h4>+ More</h4>
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
        <p>{project.title}</p>
      </Link>
    </div>
  );
}

export default function MoreProjects({ moreProjects }) {
  return (
    <MoreProjectStyles>
      <div className="mp__title">
        <h4>More Projects</h4>
      </div>
      <div className="mp__wrapper">
        <div className="mp__inner">
          {moreProjects.slice(0, 4).map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </MoreProjectStyles>
  );
}
