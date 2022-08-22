import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PortableText } from '@portabletext/react';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MoreProjects from '../components/MoreProjects';

const ProjectStyles = styled.div`
  .project__landing {
    display: flex;
    height: 100vh;
  }

  .project__title {
    width: calc(50% + 15px);
    padding: 30px;
    background-color: var(--grey);
  }

  .project__title-inner {
    height: 100%;
    padding-top: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project__title-bottom {
    display: flex;
    gap: 30px;
  }

  .project__title-bottom h4 {
    width: 50%;
  }

  .project__image {
    width: calc(50% - 15px);
    height: 100%;
  }

  .project__credit {
    color: var(--white);
    position: absolute;
    bottom: 30px;
    left: 30px;
  }

  .project__desc-inner {
    width: 100%;
  }

  .project__desc {
    padding: 80px 30px 150px 30px;
  }

  .project__desc-left {
    grid-column: span 5;
  }

  .project__desc-right {
    grid-column-start: 7;
    grid-column-end: 12;
  }

  li {
    padding: 20px 0;
    border-top: 0.5px solid black;
  }
  li:last-child {
    border-bottom: 0.5px solid black;
  }
  .projects__link {
    position: fixed;
    z-index: 10;
    top: 30px;
  }
  p {
    text-indent: 60px;
    max-width: 500px;
  }

  p:first-of-type {
    text-indent: 0;
  }
  @media only screen and (max-width: 1100px) {
    .site__grid {
      display: block;
    }
    .project__image,
    .project__title {
      width: 100%;
    }
    .project__landing {
      flex-direction: column;
    }

    .project__title-inner {
      padding-top: 15px;
    }
    .project__title-inner h1 {
      padding-bottom: 30px;
    }

    .project__landing {
      height: auto;
    }

    .gatsby-image-wrapper {
      height: calc(100vh - 250px) !important;
    }
    .project__title {
      padding: 10px;
      position: relative;
      bottom: 0%;
      height: 250px;
    }
    .projects__link {
      position: relative;
      top: auto;
      padding-bottom: 30px;
    }

    .project__credit {
      display: none;
    }

    .project__desc {
      padding: 50px 10px 40px 10px;
    }
    .project__desc-left {
      padding-bottom: 80px;
    }
  }
`;

export default function ProjectPage({ data }) {
  const moreProjects = data.moreProjects.nodes;
  const { title } = data.project;
  return (
    <>
      <GlobalStyles />
      <Nav title={title} />
      <ProjectStyles>
        <div className="project__wrapper">
          <div className="project__inner">
            <div className="project__landing">
              <div className="project__image">
                <GatsbyImage
                  image={data.project.image.asset.gatsbyImageData}
                  alt={`image of ${data.project.title}`}
                  style={{
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                  }}
                />
                <div className="project__credit">
                  <h4>Credit: {data.project.credit}</h4>
                </div>
              </div>
              <div className="project__title">
                <div className="project__title-inner">
                  <div className="projects__link">
                    <Link to="/projects">
                      <h4>All Projects</h4>
                    </Link>
                  </div>
                  <h1
                    data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="1000"
                  >
                    {data.project.title}
                  </h1>
                  <div
                    data-sal="slide-up"
                    data-sal-delay="1000"
                    data-sal-easing="ease"
                    data-sal-duration="1000"
                    className="project__title-bottom"
                  >
                    <h4>
                      Builder:
                      <br />
                      {data.project.builder}
                    </h4>
                    <h4>• {data.project.work}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="project__desc"
              data-sal="fade"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              <div className="project__desc-inner site__grid">
                <div className="project__desc-left">
                  <ul>
                    <li>
                      <h4>Builder: {data.project.builder}</h4>
                    </li>
                    <li>
                      <h4>{data.project.work}</h4>
                    </li>
                    <li>
                      <h4>Location: {data.project.location}</h4>
                    </li>
                    <li>
                      <h4>Project Budget: {data.project.budget}</h4>
                    </li>
                    <li>
                      <h4>Extent: {data.project.extent}</h4>
                    </li>
                    <li>
                      <h4>{data.project.completion}</h4>
                    </li>
                  </ul>
                </div>
                <div className="project__desc-right">
                  <PortableText value={data.project._rawContent} />
                </div>
              </div>
            </div>
            <MoreProjects moreProjects={moreProjects} />
          </div>
        </div>
      </ProjectStyles>
      <Footer />
    </>
  );
}

export const query = graphql`
  query ($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      id
      title
      work
      location
      description
      _rawContent
      credit
      completion
      builder
      budget
      extent
      image {
        asset {
          gatsbyImageData(fit: FILLMAX)
        }
      }
    }
    moreProjects: allSanityProject {
      nodes {
        id
        title
        image {
          asset {
            gatsbyImageData
          }
        }
        slug {
          current
        }
      }
    }
  }
`;
