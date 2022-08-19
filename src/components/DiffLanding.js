import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import GlobalStyles from '../styles/GlobalStyles';

const ProjectStyles = styled.div`
  .diff__landing {
    display: flex;
    height: 100vh;
  }

  .diff__title {
    width: calc(50% + 15px);
    padding: 300px 30px 30px 30px;
    background-color: var(--grey);
  }

  .diff__title-inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .diff__title-bottom {
    display: flex;
    gap: 30px;
  }

  .diff__title-bottom ul {
    width: 50%;
  }

  .diff__image {
    width: calc(50% - 15px);
    height: 100%;
  }

  @media only screen and (max-width: 1100px) {
    .diff__landing {
      flex-direction: column;
    }
    .diff__title {
      width: 100%;
      padding: 10px;
      position: absolute;
      bottom: 0%;
      height: 250px;
    }
    .gatsby-image-wrapper {
      height: calc(100vh - 250px) !important;
    }
    .diff__image {
      width: 100%;
    }
    .diff__title-bottom {
      flex-direction: column;
    }
    .diff__title-bottom ul {
      width: 100%;
    }
  }
`;

export default function DiffLanding({ content }) {
  return (
    <>
      <GlobalStyles />
      <ProjectStyles>
        <div className="diff__wrapper">
          <div className="diff__inner">
            <div className="diff__landing">
              <div className="diff__image">
                <GatsbyImage
                  image={content.image.asset.gatsbyImageData}
                  alt={`image of ${content.heading}`}
                  style={{
                    width: '100%',
                    height: '100vh',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <div className="diff__title">
                <div className="diff__title-inner">
                  <h1
                    data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease"
                    data-sal-duration="1000"
                  >
                    {content.heading}
                  </h1>
                  <div
                    data-sal="slide-up"
                    data-sal-delay="1000"
                    data-sal-easing="ease"
                    data-sal-duration="1000"
                    className="diff__title-bottom"
                  >
                    <h4>Construction, done consciously</h4>
                    <ul>
                      {content.details.map((detail) => (
                        <li key={detail}>
                          <h4>• {detail}</h4>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProjectStyles>
    </>
  );
}
