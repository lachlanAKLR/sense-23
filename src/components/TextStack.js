import React from 'react';
import { PortableText } from '@portabletext/react';
import styled from 'styled-components';

const TextStackStyles = styled.div`
  padding: 120px 30px 120px 30px;
  .stack__wrapper {
    border-top: 0.5px solid black;
  }
  .stack__item {
    padding: 60px 0;
    border-bottom: 0.5px solid black;
  }
  .stack__columnleft {
    grid-column: span 3;
  }
  .stack__columnright {
    grid-column-start: 5;
    grid-column-end: 11;
  }
  @media only screen and (max-width: 1100px) {
    padding: 60px 10px 60px 10px;
    .site__grid {
      display: block;
    }
    .stack__item {
      padding: 20px 0;
    }
    .stack__title h2 {
      padding-bottom: 20px;
    }
  }
`;

function TextStackItem({ stack }) {
  return (
    <div key={stack._key} className="stack__item site__grid">
      <div className="stack__columnleft">
        <div className="stack__title">
          <h2>{stack.heading}</h2>
        </div>
      </div>
      <div className="stack__columnright">
        <div className="stack__content">
          <PortableText value={stack.content} />
        </div>
      </div>
    </div>
  );
}

export default function TextStack({ block, raw }) {
  return (
    <TextStackStyles>
      <div className="stack__wrapper">
        {raw.stackContent.map((stack) => (
          <TextStackItem key={stack._key} stack={stack} />
        ))}
      </div>
    </TextStackStyles>
  );
}
