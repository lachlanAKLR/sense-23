import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const CtaStyles = styled.div`
  padding: 200px 30px;

  .cta__col-left {
    grid-column-start: 1;
    grid-column: span 6;
  }

  .cta__col-right {
    grid-column-start: 8;
    grid-column-end: 13;
    grid-row-start: 1;
  }

  h4 {
    padding-top: 30px;
  }
  .cross {
    padding-right: 20px;
  }
  /* Mobile Styles */
  @media only screen and (max-width: 1100px) {
    padding: 60px 10px;

    .site__grid {
      display: block;
    }

    h4 {
      padding-bottom: 30px;
    }

    .cta__col-right {
      width: 85%;
    }
  }
`;

export default function Cta() {
  const data = useStaticQuery(graphql`
    query ctaQuery {
      sanityCta {
        cta
        text
        link
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  `);

  return (
    <CtaStyles>
      <div className="cta__wrapper">
        <div className="cta__inner site__grid">
          <div className="cta__col-left">
            <h1>{data.sanityCta.cta}</h1>
            <Link to={data.sanityCta.link}>
              <h4>
                <span className="page__link">+</span>
                <span className="link__text">{data.sanityCta.text}</span>
              </h4>
            </Link>
          </div>
          <div className="cta__col-right">
            <GatsbyImage
              image={data.sanityCta.image.asset.gatsbyImageData}
              alt="CTA Image"
            />
          </div>
        </div>
      </div>
    </CtaStyles>
  );
}
