import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AnimationStyles = styled.div`
  .slide-in {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 11000;
    transform-origin: bottom;
  }
  .landing__wrapper {
    height: 100vh;
    width: 100%;
    background-color: var(--grey);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    opacity: 1;
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
      gap: 0;
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

export default function Animation() {
  return (
    <AnimationStyles>
      <motion.div
        className="slide-in"
        key="motion"
        initial={{ y: 0 }}
        animate={{ y: '-100vh' }}
        exit={{ y: '-100vh' }}
        transition={{
          duration: 0.75,
          delay: 1.25,
        }}
      >
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
      </motion.div>
    </AnimationStyles>
  );
}
