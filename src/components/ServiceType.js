import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layouts from './Layouts';

const ServiceTypeStyles = styled.div`
  .service__type-inner {
    padding: 30px;
  }
  .serviceblock__wrapper {
    padding: 30px;
  }
  .service__image {
    grid-column: span 3;
  }
  .service__type {
    padding-top: 140px;
  }
  .service__type-content {
    grid-column-start: 5;
    grid-column-end: 12;
  }
  h2 {
    padding-bottom: 60px;
  }
  h4 {
    text-align: right;
  }
  .service__type-para {
    max-width: 600px;
    padding-bottom: 60px;
  }
  .service__wrapper {
    border-top: 0.5px solid var(--black);
  }
  .service__inner {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 30px;
    padding: 20px 0;
  }
  .service__title {
    grid-column: span 2;
    text-align: left;
  }
  .service__content {
    grid-column: span 4;
  }

  button {
    font-family: EverettRegular;
    text-transform: none;
    font-size: 20px;
    text-align: left;
  }

  li:before {
    content: '+ ';
  }

  ul {
    padding-bottom: 20px;
  }

  .service__content p:first-child {
    text-indent: 0px;
  }

  .service__content p {
    text-indent: 40px;
  }

  .mobile__header {
    display: none;
  }
  .service__type-content h2 {
    display: block;
  }

  .service__wrapper:last-child {
    border-bottom: 0.5px solid black;
  }

  button p {
    text-align: left;
  }

  @media only screen and (max-width: 1100px) {
    .site__grid {
      display: block;
    }
    .serviceblock__wrapper {
      padding: 10px;
    }
    .service__type {
      padding-top: 0;
    }
    .mobile__header {
      display: block;
    }
    .service__type-content h2 {
      display: none;
    }
    h2 {
      padding-bottom: 30px;
    }
    .gatsby-image-wrapper {
      height: 400px;
    }
    .service__image {
      padding-bottom: 30px;
    }
    .service__wrapper {
      width: 100%;
    }
    .service__inner {
      display: flex;
    }
    .service__title {
      width: 70%;
    }
    .service__type {
      padding-bottom: 110px;
    }
    .service__type-para {
      padding-bottom: 30px;
    }
  }
`;

export default function ServiceType({
  layouts,
  _rawLayouts,
  heading,
  content,
  image,
}) {
  return (
    <ServiceTypeStyles>
      <div
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1000"
        className="service__type"
      >
        <div className="service__type-inner site__grid">
          <h2 className="mobile__header">{heading}</h2>
          <div className="service__image">
            <GatsbyImage image={image} alt={`image of ${heading}`} />
          </div>
          <div className="service__type-content">
            <h2>{heading}</h2>
            <p className="service__type-para">{content}</p>
            <Layouts layouts={layouts} _rawLayouts={_rawLayouts} />
          </div>
        </div>
      </div>
    </ServiceTypeStyles>
  );
}
