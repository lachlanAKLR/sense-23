import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

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
`;

export default function ProjectsInfo() {
  const data = useStaticQuery(graphql`
    query projectsQuery {
      info: sanityProjects {
        headline
        details
        description
      }
    }
  `);
  console.log(data);
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
            <p>{data.info.description}</p>
          </div>
        </div>
      </div>
    </ProjectsInfoStyles>
  );
}
