import styled from 'styled-components';
import React, { useEffect } from 'react';
import gsap from 'gsap';

const LandingAnimationStyles = styled.div`
  .landing__wrapper {
    height: 100vh;
    width: 100%;
    background-color: var(--grey);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    opacity: 0;
    overflow: hidden;
    left: 0;
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
  .row__good {
    visibility: hidden;
    animation: 0.75s appear 0.5s;
  }
  .row__common {
    visibility: hidden;
    animation: 0.75s appear 0.4s;
  }
  .row__seeing {
    visibility: hidden;
    animation: 0.75s appear 0.3s;
  }
  .row__making {
    visibility: hidden;
    animation: 0.75s appear 0.2s;
  }
  .row__trusting {
    visibility: hidden;
    animation: 0.75s appear 0.1s;
  }
  .row__undefined {
    visibility: hidden;
    animation: 0.75s appear;
  }

  @keyframes appear {
    from {
      visibility: hidden;
    }
    to {
      visibility: visible;
    }
  }

  @media only screen and (max-width: 1100px) {
    .landing__column {
      width: 50%;
    }
    .landing__row {
      width: 200%;
    }
    h1 {
      font-family: Druk;
      font-size: 7vw;
      line-height: 7vw;
      padding: 1%;
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

function RowBlock() {
  const good = `good`;
  const common = `common`;
  const making = `making`;
  const trusting = `trusting`;
  const seeing = `seeing`;
  return (
    <>
      <Row content={good} />
      <Row content={common} />
      <Row content={seeing} />
      <Row content={making} />
      <Row content={trusting} />
      <Row />
    </>
  );
}

export default function LandingAnimation({ transitionStatus }) {
  useEffect(() => {
    gsap.set('.landing__wrapper', {
      autoAlpha: 1,
      duration: 6,
    });
    gsap.to('.landing__block', {
      autoAlpha: 1,
      delay: 3,
    });
    gsap.to('.sense__logo', {
      autoAlpha: 1,
      duration: 2,
      delay: 2,
      ease: 'circ',
    });
    gsap.to('.home__middle', {
      autoAlpha: 1,
      duration: 1.5,
      delay: 2.5,
      ease: 'circ',
    });
    gsap.to('.home__bottom', {
      autoAlpha: 1,
      duration: 1.5,
      delay: 3,
      ease: 'circ',
    });
  }, []);
  useEffect(() => {
    if (transitionStatus === 'entering') {
      gsap.to('.landing__wrapper', {
        autoAlpha: 1,
        duration: 0,
      });
    }
    gsap.to('.landing__wrapper', {
      autoAlpha: 0,
      duration: 0.25,
      delay: 1.5,
    });
  }, [transitionStatus]);
  return (
    <LandingAnimationStyles>
      <div className="landing__wrapper">
        <div className="landing__inner">
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
          <RowBlock />
        </div>
      </div>
    </LandingAnimationStyles>
  );
}
