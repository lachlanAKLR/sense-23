import React, { useState } from 'react';
import styled from 'styled-components';
import { PortableText } from '@portabletext/react';
import { GatsbyImage } from 'gatsby-plugin-image';

const ServiceBlockStyles = styled.div`
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
  }
  .service__content {
    grid-column: span 4;
  }
  li:before {
    content: '+ ';
  }
  .service__content p,
  ul {
    padding-bottom: 20px;
  }
`;

function SingleService({ service }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div className="service__wrapper">
      <div className="service__inner">
        <div className="service__title">
          <button type="button" onClick={handleClick}>
            <p>{service.title}</p>
          </button>
        </div>
        <div
          className={
            isActive ? 'service__content visible' : 'service__content hidden'
          }
        >
          <PortableText value={service._rawContent} />
        </div>
        <h4>
          <button type="button" onClick={handleClick}>
            {isActive ? '-' : '+'}
          </button>
        </h4>
      </div>
    </div>
  );
}

export default function ServiceBlock({
  doorServices,
  floorServices,
  groutingServices,
  content,
}) {
  return (
    <ServiceBlockStyles>
      <div className="serviceblock__wrapper">
        <div className="serviceblock__inner">
          <div
            data-sal="fade"
            data-sal-easing="ease"
            data-sal-duration="1000"
            className="service__type"
          >
            <div className="service__type-inner site__grid">
              <div className="service__image">
                <GatsbyImage
                  image={content.firstImage.asset.gatsbyImageData}
                  alt={`image of ${content.firstSubheading}`}
                />
              </div>
              <div className="service__type-content">
                <h2>{content.firstSubheading}</h2>
                <p className="service__type-para">{content.firstText}</p>
                {doorServices.map((service) => (
                  <SingleService key={service.id} service={service} />
                ))}
              </div>
            </div>
          </div>
          <div
            data-sal="fade"
            data-sal-easing="ease"
            data-sal-duration="1000"
            className="service__type"
          >
            <div className="service__type-inner site__grid">
              <div className="service__image">
                <GatsbyImage
                  image={content.secondImage.asset.gatsbyImageData}
                  alt={`image of ${content.secondSubheading}`}
                />
              </div>
              <div className="service__type-content">
                <h2>{content.secondSubheading}</h2>
                <p className="service__type-para">{content.secondText}</p>
                {floorServices.map((service) => (
                  <SingleService key={service.id} service={service} />
                ))}
              </div>
            </div>
          </div>
          <div
            data-sal="fade"
            data-sal-easing="ease"
            data-sal-duration="1000"
            className="service__type"
          >
            <div className="service__type-inner site__grid">
              <div className="service__image">
                <GatsbyImage
                  image={content.thirdImage.asset.gatsbyImageData}
                  alt={`image of ${content.thirdSubheading}`}
                />
              </div>
              <div className="service__type-content">
                <h2>{content.thirdSubheading}</h2>
                <p className="service__type-para">{content.thirdText}</p>
                {groutingServices.map((service) => (
                  <SingleService key={service.id} service={service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceBlockStyles>
  );
}
