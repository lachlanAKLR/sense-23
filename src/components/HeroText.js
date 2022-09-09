import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const HeroTextStyles = styled.div`
  padding: 60px 30px 100px 30px;

  /* Mobile Styles */
  @media only screen and (max-width: 1100px) {
    padding: 30px 10px 50px 10px;
  }
`;

export default function HeroText() {
  const data = useStaticQuery(graphql`
    query TextQuery {
      sanityHome {
        herotext
      }
    }
  `);

  return (
    <HeroTextStyles>
      <div className="home__herotext-wrapper">
        <div className="home_herotext">
          <h1 data-sal="fade" data-sal-easing="ease" data-sal-duration="2000">
            {data.sanityHome.herotext}
          </h1>
        </div>
      </div>
    </HeroTextStyles>
  );
}
