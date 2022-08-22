import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { PortableText } from '@portabletext/react';
import styled from 'styled-components';

const TextImageStyles = styled.div`
  padding: 90px 30px 60px 30px;

  .textimage__inner {
    grid-auto-flow: dense;
  }
  .textimage__columnleft {
    grid-column-start: 1;
    grid-column-end: 6;
    order: 2;
  }

  .textimage__columnright {
    grid-column-start: 7;
    grid-column-end: 12;
    order: 1;
  }

  .textimage__content {
    border-top: 0.5px solid black;
    padding-top: 20px;
  }

  h3,
  h2 {
    padding-bottom: 60px;
    max-width: 500px;
  }

  p {
    text-indent: 60px;
    max-width: 500px;
  }

  p:first-of-type {
    text-indent: 0;
  }

  @media only screen and (max-width: 1100px) {
    padding: 60px 10px 30px 10px;
    .site__grid {
      display: block;
    }
    h2,
    h3 {
      padding-bottom: 30px;
    }
    .textimage__content {
      padding-bottom: 30px;
    }
    .gatsby-image-wrapper {
      height: 435px;
    }
  }
`;

function ColumnLayout({ block, raw }) {
  const layoutPosition = block.position;

  if (layoutPosition) {
    return (
      <>
        <div className="textimage__columnleft">
          <div className="textimage__content">
            <PortableText value={raw.content} />
          </div>
        </div>
        <div className="textimage__columnright">
          <div className="textimage__image">
            <GatsbyImage
              image={block.image.asset.gatsbyImageData}
              alt="Image"
            />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="textimage__columnright">
        <div className="textimage__content">
          <PortableText value={raw.content} />
        </div>
      </div>
      <div className="textimage__columnleft">
        <div className="textimage__image">
          <GatsbyImage image={block.image.asset.gatsbyImageData} alt="Image" />
        </div>
      </div>
    </>
  );
}

export default function TextImage({ block, raw }) {
  return (
    <TextImageStyles>
      <div
        className="textimage__wrapper"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <div className="textimage__inner site__grid">
          <ColumnLayout block={block} raw={raw} />
        </div>
      </div>
    </TextImageStyles>
  );
}
