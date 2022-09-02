import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ColourStyles = styled.div`
  padding: 140px 30px 30px 30px;
  .grey {
    background-color: var(--grey);
  }
  .black {
    background-color: var(--black);
    color: var(--white);
  }

  .black h4 {
    color: var(--white);
  }
  h1 {
    grid-column: span 6;
    padding-left: 30px;
  }
  .colour__link {
    grid-column-start: 9;
    grid-column-end: 13;
    text-align: right;
    padding-right: 30px;
  }

  .colour__top {
    padding-top: 30px;
    padding-bottom: 150px;
  }

  .colour__bottom {
    padding-bottom: 30px;
  }

  .colour__subtitle {
    grid-column: span 3;
    padding-left: 30px;
  }

  .colour__byline {
    grid-column: span 5;
    max-width: 450px;
  }
`;

export default function ColourCta({ cta }) {
  const isGrey = cta._type === `greyCta`;

  return (
    <ColourStyles>
      <div
        className={isGrey ? 'colour__wrapper grey' : 'colour__wrapper black'}
      >
        <div className="colour__inner">
          <div className="colour__top site__grid">
            <h1>{cta.cta}</h1>
            <div className="colour__link">
              <Link to={cta.link}>
                <h4>
                  <span className="page__link">+</span>
                  <span className="link__text">{cta.text}</span>
                </h4>
              </Link>
            </div>
          </div>
          <div className="colour__bottom site__grid">
            <h4 className="colour__subtitle">
              Construction, <br />
              done consciously
            </h4>
            <h4 className="colour__byline">{cta.byline}</h4>
          </div>
        </div>
      </div>
    </ColourStyles>
  );
}
