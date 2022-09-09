import React, { useState, useEffect } from 'react';
import { PortableText } from '@portabletext/react';

export default function TitleContentImage({ block, raw }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div className="service__wrapper">
      <button
        type="button"
        className={isActive ? 'service__inner gap' : 'service__inner no_gap'}
        onClick={handleClick}
      >
        <div className="service__title">
          <button type="button">
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
        <h4 style={{ position: 'absolute', right: 30 }}>
          <button type="button">{isActive ? '-' : '+'}</button>
        </h4>
      </button>
    </div>
  );
}
