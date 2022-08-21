import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';

const NavStyles = styled.div`
  .header__nav {
    position: fixed;
    width: 100%;
    z-index: 8000;
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
    padding: 100px 30px;
    top: -100%;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--grey);
    transition-timing-function: ease;
    transition: all 0.5s ease-in-out 0.5s;
    z-index: 7999;
  }
  .overlay__active {
    top: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
  }
  .hidden {
    opacity: 0;
  }

  .overlay__menu {
    opacity: 0;
    transition: all 0.5s ease-in-out 0s;
  }
  .items__visible {
    opacity: 1;
    transition: all 0.5s ease-in-out 0.5s;
  }

  /* Mobile Styles */

  @media only screen and (max-width: 1100px) {
    .header__nav {
      padding: 10px;
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
        </div>
      </div>
    </NavStyles>
  );
}
