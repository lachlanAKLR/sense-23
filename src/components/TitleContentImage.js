import React, { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';

export default function TitleContentImage({ block, raw }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div className="service__wrapper">
      <button type="button" onClick={handleClick} className="service__inner">
        <div className="service__title">
          <button type="button" onClick={handleClick}>
            <p>{block.heading}</p>
          </button>
        </div>
        <div
          className={
            isActive ? 'service__content visible' : 'service__content hidden'
          }
        >
          <PortableText value={raw.content} />
        </div>
        <h4>
          <button type="button" onClick={handleClick}>
            {isActive ? '-' : '+'}
          </button>
        </h4>
      </button>
    </div>
  );
}
