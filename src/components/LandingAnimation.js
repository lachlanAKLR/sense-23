import React from 'react';
import styled from 'styled-components';

const LandingAnimationStyles = styled.div`
  .landing__wrapper {
    height: 100vh;
    width: 100%;
    background-color: var(--grey);
  }
  h1 {
    font-family: Druk;
    font-size: 3.25vw;
    line-height: 2.85vw;
    padding: 1%;
  }
  .sense {
    text-align: right;
  }
  .landing__row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  .landing__column {
    width: 25%;
  }

  .row__undefined {
    animation: flash 1s steps(6);
  }

  @keyframes flash {
    from {
      visibility: hidden;
    }
    to {
      visibility: visible;
    }
  }
`;

function Row({ content }) {
  return (
    <div className="landing__block">
      <div className={`landing__row row__${content}`}>
        <div className="landing__column">
          <h1 className={content}>{content}</h1>
        </div>
        <div className="landing__column">
          <h1 className="sense">Sense</h1>
        </div>
        <div className="landing__column">
          <h1 className={content}>{content}</h1>
        </div>
        <div className="landing__column">
          <h1 className="sense">Sense</h1>
        </div>
      </div>
    </div>
  );
}

export default function LandingAnimation() {
  const good = `good`;
  const common = `common`;
  const making = `making`;
  const trusting = `trusting`;
  const seeing = `seeing`;
  return (
    <LandingAnimationStyles>
      <div className="landing__wrapper">
        <div className="landing__inner">
          <Row content={good} />
          <Row content={common} />
          <Row content={seeing} />
          <Row content={making} />
          <Row content={trusting} />
          <Row />
          {/* <Row content={good} />
          <Row content={common} />
          <Row content={seeing} />
          <Row content={making} />
          <Row content={trusting} />
          <Row />
          <Row content={good} />
          <Row content={common} />
          <Row content={seeing} />
          <Row content={making} />
          <Row content={trusting} />
          <Row />
          <Row content={good} />
          <Row content={common} />
          <Row content={seeing} />
          <Row content={making} />
          <Row content={trusting} />
          <Row /> */}
        </div>
      </div>
    </LandingAnimationStyles>
  );
}
