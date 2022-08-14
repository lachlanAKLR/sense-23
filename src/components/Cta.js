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
            <h4>
              <Link to={data.sanityCta.link}>
                <span className="cross">+</span>
                {data.sanityCta.text}
              </Link>
            </h4>
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
