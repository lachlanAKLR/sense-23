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
