import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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
    padding: 100px 30px;
    top: -100%;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--grey);
    transition-timing-function: ease;
    transition: 0.5s;
    z-index: 99;
  }
  .overlay__active {
    top: 0;
    left: 0;
  }
  .hidden {
    opacity: 0;
  }
`;

export default function Nav() {
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
          <h4 className="header__page-title">Page Title</h4>
        </div>
      </div>
      <div
        className={
          isActive ? 'overlay__wrapper overlay__active' : 'overlay__wrapper'
        }
      >
        <div className="overlay__inner">
          <div className="overlay__menu">
            <ul>
              <li>
                <h1>
                  <Link to="/">Home</Link>
                </h1>
              </li>
              <li>
                <h1>
                  <Link to="/services">Our Services</Link>
                </h1>
              </li>
              <li>
                <h1>
                  <Link to="/difference">Our Difference</Link>
                </h1>
              </li>
              <li>
                <h1>
                  <Link to="/projects">Our Projects</Link>
                </h1>
              </li>
              <li>
                <h1>
                  <Link to="/contact">Contact</Link>
                </h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavStyles>
  );
}
