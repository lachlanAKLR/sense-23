import React from 'react';
import { PortableText } from '@portabletext/react';
import styled from 'styled-components';

const TitleContentStyles = styled.div`
  padding: 120px 30px 120px 30px;

  .titlecontent__columnleft {
    grid-column-start: 1;
    grid-column-end: 6;
  }

  .titlecontent__columnright {
    grid-column-start: 7;
    grid-column-end: 12;
  }
  h2 {
    padding-top: 20px;
  }
  h2,
  .textimage__content {
    border-top: 0.5px solid black;
  }
  li {
    list-style: decimal;
    border-bottom: 0.5px solid black;
    padding: 20px 0px;
    list-style-position: inside;
  }
  @media only screen and (max-width: 1100px) {
    padding: 60px 10px 60px 10px;
    .site__grid {
      display: block;
    }
    .titlecontent__heading {
      padding-bottom: 30px;
    }
  }
`;

export default function TitleContent({ block, raw }) {
  return (
    <TitleContentStyles>
      <div className="titlecontent__wrapper">
        <div className="titlecontent__inner site__grid">
          <div className="titlecontent__columnleft">
            <div className="titlecontent__heading">
              <h2>{block.heading}</h2>
            </div>
          </div>
          <div className="titlecontent__columnright">
            <div className="textimage__content" />
            <PortableText value={raw.content} />
          </div>
        </div>
      </div>
    </TitleContentStyles>
  );
}
