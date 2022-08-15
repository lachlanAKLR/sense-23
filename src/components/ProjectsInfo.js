import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { PortableText } from '@portabletext/react';

const ProjectsInfoStyles = styled.div`
  padding: 140px 30px 110px 30px;

  h2 {
    padding-bottom: 60px;
  }

  .projects__left {
    grid-column: span 4;
  }
  .projects__right {
    grid-column: span 5;
  }

  /* Mobile Styles */
  @media only screen and (max-width: 1100px) {
    padding: 85px 10px 30px 10px;
    .site__grid {
      display: block;
    }
    h2,
    .projects__left {
      padding-bottom: 30px;
    }
  }
`;

export default function ProjectsInfo() {
  const data = useStaticQuery(graphql`
    query projectsQuery {
      info: sanityProjects {
        headline
        details
        _rawContent
      }
    }
  `);
  return (
    <ProjectsInfoStyles>
      <div className="projects__info-wrapper">
        <div className="projects__info site__grid">
          <div className="projects__left">
            <h2>{data.info.headline}</h2>
            <ul>
              {data.info.details.map((detail) => (
                <li key={detail}>
                  <h4>{detail}</h4>
                </li>
              ))}
            </ul>
          </div>
          <div className="projects__right">
            <PortableText value={data.info._rawContent} />
          </div>
        </div>
      </div>
    </ProjectsInfoStyles>
  );
}
