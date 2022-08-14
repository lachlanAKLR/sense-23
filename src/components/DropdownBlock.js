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

  .drop__title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
  }

  li:before {
    content: '+ ';
  }

  li {
    padding-bottom: 10px;
  }

  .hidden {
    height: 0px;
    opacity: 0;
    pointer-events: none;
  }

  .remove-pad {
    padding-bottom: 0px;
  }
`;

function DropdownItem({ dropdown }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div className="drop__item">
      <div className={isActive ? 'drop__title' : 'drop__title remove-pad'}>
        <p>{dropdown.heading}</p>
        <h4>
          <button type="button" onClick={handleClick}>
            {isActive ? '-' : '+'}
          </button>
        </h4>
      </div>
      <div className={isActive ? 'drop__content' : 'drop__content hidden'}>
        <PortableText value={dropdown.content} />
      </div>
    </div>
  );
}

export default function DropdownBlock({ block, raw }) {
  return (
    <DropdownBlockStyles>
      <div className="drop__wrapper">
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
