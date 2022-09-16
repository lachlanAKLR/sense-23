import React, { useState } from 'react';
import { PortableText } from '@portabletext/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const DropdownBlockStyles = styled.div`
  padding: 120px 30px 120px 30px;
  .drop__columnleft {
    grid-column: span 4;
  }

  .drop__columnright {
    grid-column-start: 7;
    grid-column-end: 12;
  }

  .drop__item {
    padding: 20px 0;
    border-top: 0.5px solid black;
  }

  .drop__item:last-child {
    border-bottom: 0.5px solid black;
  }

  .drop__title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
    transition: padding-bottom 0.5s ease-in;
  }

  li:before {
    content: '+ ';
  }

  li {
    padding-bottom: 10px;
    text-align: left;
  }

  .drop__content {
    max-height: 500px;
    opacity: 1;
    pointer-events: all;
    transition: max-height 1s ease-out;
    transition: opacity 1s ease-out 0.5s;
  }
  .hidden {
    max-height: 0;
    opacity: 0;
    pointer-events: none;
    transition: max-height 1s ease-in;
    transition: opacity 1s ease-in 0.5s;
  }

  .remove-pad {
    padding-bottom: 0px;
    transition: padding-bottom 0.5s ease-out;
  }

  button {
    font-family: EverettRegular;
    text-transform: none;
    font-size: 20px;
  }

  ul {
    text-indent: -20px;
    margin-left: 20px;
  }

  @media only screen and (max-width: 1100px) {
    padding: 60px 10px 60px 10px;
    .site__grid {
      display: block;
    }
    .drop__columnleft {
      padding-bottom: 30px;
    }
    .gatsby-image-wrapper {
      height: 435px;
    }
    .drop__title button {
      font-size: 16px;
    }
    ul {
      text-indent: -15px;
      margin-left: 15px;
    }
  }
`;

function DropdownItem({ dropdown }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <button type="button" className="drop__item" onClick={handleClick}>
      <div className={isActive ? 'drop__title' : 'drop__title remove-pad'}>
        <p>
          <button type="button">{dropdown.heading}</button>
        </p>
        <h4>
          <button type="button">{isActive ? '-' : '+'}</button>
        </h4>
      </div>
      <div className={isActive ? 'drop__content' : 'drop__content hidden'}>
        <PortableText value={dropdown.content} />
      </div>
    </button>
  );
}

export default function DropdownBlock({ block, raw }) {
  return (
    <DropdownBlockStyles>
      <div
        className="drop__wrapper"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <div className="drop__inner site__grid">
          <div className="drop__columnleft">
            <div className="drop__image">
              <GatsbyImage
                image={block.image.asset.gatsbyImageData}
                alt={`image of ${block.heading}`}
              />
            </div>
          </div>
          <div className="drop__columnright">
            <div className="drop__items">
              {raw.dropContent.map((dropdown) => (
                <DropdownItem key={dropdown._key} dropdown={dropdown} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </DropdownBlockStyles>
  );
}
