import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PortableText } from '@portabletext/react';

const HomeBlockStyles = styled.div`
  padding: 30px 30px 150px 30px;
  .gatsby-image-wrapper {
    max-height: 900px;
  }
  .block__inner {
    display: flex;
    gap: 30px;
  }
  .block__swap {
    flex-direction: row-reverse;
  }
  .image__wrapper,
  .content__wrapper {
    width: 50%;
  }
  .content__inner {
    padding: 100px 0 100px 0;
    grid-column-start: 2;
    grid-column-end: 6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .content__top h4 {
    padding-bottom: 30px;
  }
  p {
    padding-bottom: 30px;
  }
  .mobile-image__wrapper {
    display: none;
  }
  .image__wrapper {
    display: block;
  }

  /* Mobile Styles */
  @media only screen and (max-width: 1100px) {
    padding: 30px 10px 50px 10px;

    .block__inner {
      flex-direction: column;
    }
    .content__inner {
      padding: 0;
    }
    .image__wrapper,
    .content__wrapper {
      width: 100%;
    }

    .content__wrapper {
      display: block;
    }

    .image__wrapper {
      display: none;
    }

    .mobile-image__wrapper {
      display: block;
      padding-bottom: 30px;
    }

    .content__top h4 {
      padding-bottom: 20px;
    }

    .content__top h1 {
      padding-bottom: 30px;
    }
  }
`;

function BlockContent({ block, raw }) {
  const layoutPosition = block.position;
  if (layoutPosition) {
    return (
      <div
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1000"
        className="block__inner block__swap"
      >
        <div className="image__wrapper">
          <GatsbyImage
            image={block.image.asset.gatsbyImageData}
            alt={`image of ${block.heading}`}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="content__wrapper half__grid">
          <div className="content__inner">
            <div className="content__top">
              <Link to={block.link}>
                <h4>{block.subheading}</h4>
              </Link>
              <h1
                data-sal="slide-right"
                data-sal-delay="250"
                data-sal-easing="ease"
                data-sal-duration="1000"
              >
                {block.heading}
              </h1>
              <div className="mobile-image__wrapper">
                <GatsbyImage
                  image={block.image.asset.gatsbyImageData}
                  alt={`image of ${block.heading}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
            <div className="content__bottom">
              <PortableText value={raw.content} />
              <Link to={block.link}>
                <h4>
                  <span className="page__link">+</span>
                  <span className="link__text">More</span>
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      data-sal="fade"
      data-sal-easing="ease"
      data-sal-duration="1000"
      className="block__inner"
    >
      <div className="image__wrapper">
        <GatsbyImage
          image={block.image.asset.gatsbyImageData}
          alt={`image of ${block.heading}`}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="content__wrapper half__grid">
        <div className="content__inner">
          <div className="content__top">
            <Link to={block.link}>
              <h4>{block.subheading}</h4>
            </Link>
            <h1
              data-sal="slide-right"
              data-sal-delay="250"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              {block.heading}
            </h1>
            <div className="mobile-image__wrapper">
              <GatsbyImage
                image={block.image.asset.gatsbyImageData}
                alt={`image of ${block.heading}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
          <div className="content__bottom">
            <PortableText value={raw.content} />
            <Link to={block.link}>
              <h4>
                <span className="page__link">+</span>
                <span className="link__text">More</span>
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeBlock({ block, raw }) {
  return (
    <HomeBlockStyles>
      <div className="block__wrapper">
        <BlockContent block={block} raw={raw} />
      </div>
    </HomeBlockStyles>
  );
}
