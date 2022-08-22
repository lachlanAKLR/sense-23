import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';
import Footer from './Footer';

const NavStyles = styled.div`
  .header__nav {
    position: fixed;
    width: 100%;
    z-index: 100;
    padding: 30px;
  }
  .header__menu {
    grid-column: span 2;
    display: flex;
    gap: 20px;
  }
  .header__page-title {
    grid-column: span 6;
  }
  .bar {
    display: block;
    width: 30px;
    height: 0.5px;
    margin: 5px auto;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    background-color: #101010;
  }
  .overlay__wrapper {
    position: fixed;
    padding: 100px 30px 30px 30px;
    top: -100%;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--grey);
    transition-timing-function: ease;
    transition: all 0.5s ease-in-out 0.5s;
    z-index: 99;
  }
  .overlay__inner {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .overlay__active {
    top: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
  }
  .hidden {
    opacity: 0;
  }

  .overlay__menu li {
    opacity: 0;
    transition: all 0.5s ease-in-out 0s;
  }

  .items__visible li:nth-child(1) {
    opacity: 1;
    transition: all 0.5s ease-in-out 0.5s;
  }

  .items__visible li:nth-child(2) {
    opacity: 1;
    transition: all 0.5s ease-in-out 0.6s;
  }

  .items__visible li:nth-child(3) {
    opacity: 1;
    transition: all 0.5s ease-in-out 0.7s;
  }

  .items__visible li:nth-child(4) {
    opacity: 1;
    transition: all 0.5s ease-in-out 0.8s;
  }

  .items__visible li:nth-child(5) {
    opacity: 1;
    transition: all 0.5s ease-in-out 0.9s;
  }

  .Footer__FooterStyles-eZsFsR {
    padding-bottom: 0;
  }

  .footer__back {
    display: none;
  }

  /* Mobile Styles */

  @media only screen and (max-width: 1100px) {
    .header__nav {
      padding: 10px;
    }
    .header__button {
      padding-top: 2px;
    }
    .header__page-title {
      padding-top: 2px;
    }
    .overlay__wrapper {
      padding: 50px 10px;
    }
    li {
      padding: 10px 0;
    }
    .site__grid {
      display: flex;
    }
    .header__page-title {
      width: 50%;
    }
    .header__menu {
      width: 100px;
    }
    .footer__wrapper {
      display: none;
    }
  }
`;

export default function Nav({ title }) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <NavStyles>
      <div className="header__wrapper">
        <div className="header__nav site__grid">
          <button className="header__menu" type="button" onClick={handleClick}>
            <div className="header__hamburger">
              <span className={isActive ? 'bar hidden' : 'bar'} />
              <span className="bar" />
              <span className={isActive ? 'bar hidden' : 'bar'} />
            </div>
            <div className="header__button">{isActive ? 'close' : 'menu'}</div>
          </button>
          <h4 className="header__page-title">{title}</h4>
        </div>
      </div>
      <div
        className={
          isActive ? 'overlay__wrapper overlay__active' : 'overlay__wrapper'
        }
      >
        <div className="overlay__inner">
          <div
            className={
              isActive ? 'overlay__menu items__visible' : 'overlay__menu'
            }
          >
            <ul>
              <li>
                <h1>
                  <TransitionLink
                    to="/"
                    exit={{
                      length: 1,
                    }}
                    entry={{
                      length: 1.75,
                    }}
                  >
                    Home
                  </TransitionLink>
                </h1>
              </li>
              <li>
                <h1>
                  <TransitionLink
                    to="/services"
                    exit={{
                      length: 1,
                    }}
                    entry={{
                      length: 1.75,
                    }}
                  >
                    Services
                  </TransitionLink>
                </h1>
              </li>
              <li>
                <h1>
                  <TransitionLink
                    to="/difference"
                    exit={{
                      length: 1,
                    }}
                    entry={{
                      length: 1.75,
                    }}
                  >
                    Our Difference
                  </TransitionLink>
                </h1>
              </li>
              <li>
                <h1>
                  <TransitionLink
                    to="/projects"
                    exit={{
                      length: 1,
                    }}
                    entry={{
                      length: 1.75,
                    }}
                  >
                    Our Projects
                  </TransitionLink>
                </h1>
              </li>
              <li>
                <h1>
                  <TransitionLink
                    to="/contact"
                    exit={{
                      length: 1,
                    }}
                    entry={{
                      length: 1.75,
                    }}
                  >
                    Contact Us
                  </TransitionLink>
                </h1>
              </li>
            </ul>
          </div>
          <Footer />
        </div>
      </div>
    </NavStyles>
  );
}
