import React from 'react';
import { PortableText } from '@portabletext/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const ServiceContentStyles = styled.div`
  .content__inner {
    display: flex;
    height: 100vh;
  }

  .content__left,
  .content__right {
    width: 50%;
    height: 100%;
  }

  .content__left {
    padding: 140px 30px 60px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h2 {
    padding-bottom: 60px;
  }

  p {
    text-indent: 60px;
  }

  p:first-of-type {
    text-indent: 0;
  }

  .content__content {
    grid-column: span 5;
  }

  h4 {
    max-width: 300px;
  }

  @media only screen and (max-width: 1100px) {
    padding-bottom: 60px;
    .content__inner {
      flex-direction: column-reverse;
      height: auto;
    }
    .content__left,
    .content__right {
      width: 100%;
      height: auto;
    }

    .gatsby-image-wrapper {
      height: calc(100vh - 250px) !important;
    }

    .content__left {
      padding: 30px 10px 30px 10px;
    }
    h2 {
      padding-bottom: 20px;
    }
    h4 {
      padding-bottom: 30px;
    }
    .half__grid {
      display: block;
    }
    p {
      text-indent: 30px;
    }
  }
`;

export default function ServiceContent({ content }) {
  return (
    <ServiceContentStyles>
      <div className="content__wrapper">
        <div className="content__inner">
          <div
            data-sal="fade"
            data-sal-easing="ease"
            data-sal-duration="1000"
            className="content__left"
          >
            <div className="content__top">
              <h2>{content.heading}</h2>
              <h4>{content.subheading}</h4>
            </div>
            <div className="content__bottom half__grid">
              <div className="content__content">
                <PortableText value={content._rawServiceContent} />
              </div>
            </div>
          </div>
          <div className="content__right">
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
        </div>
      </div>
    </ServiceContentStyles>
  );
}
