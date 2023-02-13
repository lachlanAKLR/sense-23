import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled, { css } from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

import Logo from '../images/Sense_Logo.svg';

const HomeHeroStyles = styled.div`
  z-index: 7000;
  position: relative;
  .home__logo {
    position: absolute;
    top: 0;
    padding: 30px;
    width: 100vw;
    height: auto;
  }

  .home__logo svg {
    width: 100%;
    ${(props) =>
      props.isWhite
        ? css`
            filter: invert(93%) sepia(0%) saturate(7486%) hue-rotate(46deg)
              brightness(112%) contrast(100%);
          `
        : css`
            filter: none;
          `};
  }

  .home__info {
    grid-column-start: 1;
    grid-column: span 4;
  }

  h4,
  a {
    ${(props) =>
      props.isWhite
        ? css`
            color: white;
          `
        : css`
            color: black;
          `};
  }

  .home__landingtext {
    grid-column-start: 7;
    grid-column-end: 12;
    grid-row-start: 1;
    max-width: 500px;
  }

  .home__middle {
    opacity: 0;
    padding-top: 100px;
  }

  .home__construction {
    grid-column: span 6;
  }

  .home__done {
    grid-column: span 6;
  }

  .home__bottom {
    opacity: 0;
    width: 100%;
    position: relative;
    bottom: 80px;
    padding: 30px;
  }

  .home__herotext-wrapper {
    padding: 60px 30px 150px 30px;
  }

  .sense__logo {
    opacity: 0;
  }

  /* Mobile Styles */

  @media only screen and (max-width: 1100px) {
    z-index: 1;
    .home__logo {
      padding: 40px 10px 10px 10px;
    }
    .home__info {
      display: none;
    }
    .home__middle {
      display: flex;
    }

    .home__bottom {
      padding: 10px;
      bottom: 40px;
    }
  }
`;

export default function HomeHero() {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      sanityHome {
        heroimage {
          asset {
            gatsbyImageData
          }
        }
        landingtext
        herotext
        whiteText
      }
      sanitySiteSettings {
        abn
        acn
        instagram
        linkedin
      }
    }
  `);

  const isWhite = data.sanityHome.whiteText === true;

  return (
    <HomeHeroStyles isWhite={isWhite}>
      <div className="home__hero-image-wrapper">
        <div className="home__hero-image-inner">
          <GatsbyImage
            image={data.sanityHome.heroimage.asset.gatsbyImageData}
            style={{
              width: '100%',
              height: '100vh',
              objectFit: 'cover',
            }}
            alt="Landing Image"
          />
          <div className="home__logo">
            <Logo className="sense__logo" />
            <div className="home__middle site__grid">
              <div className="home__info">
                <h4>Sense Constructions</h4>
                <h4>ABN: {data.sanitySiteSettings.abn}</h4>
                <h4>ACN: {data.sanitySiteSettings.acn}</h4>
                <h4>
                  <a href={data.sanitySiteSettings.instagram}>
                    Insta:@senseconstructions
                  </a>
                </h4>
                <h4>
                  <a href={data.sanitySiteSettings.linkedin}>
                    linkedin:sense-constructions
                  </a>
                </h4>
              </div>
              <div className="home__landingtext">
                <h4>{data.sanityHome.landingtext}</h4>
              </div>
            </div>
          </div>
          <div className="home__bottom site__grid">
            <div className="home__construction">
              <h4>Construction</h4>
            </div>
            <div className="home__done">
              <h4>Done Consciously</h4>
            </div>
          </div>
        </div>
      </div>
    </HomeHeroStyles>
  );
}
