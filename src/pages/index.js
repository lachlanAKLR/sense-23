import * as React from 'react';
import { graphql } from 'gatsby';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Cta from '../components/Cta';
import HomeHero from '../components/HomeHero';
import OurProjects from '../components/OurProjects';
import Layouts from '../components/Layouts';
import HeroText from '../components/HeroText';

export default function HomePage({ data }) {
  const ourProjects = data.ourProjects.nodes;
  const { layouts, _rawLayouts } = data.sanityHome;

  return (
    <>
      <GlobalStyles />
      <Nav />
      <HomeHero />
      <HeroText />
      <Layouts layouts={layouts} _rawLayouts={_rawLayouts} />
      <OurProjects ourProjects={ourProjects} />
      <Cta />
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    ourProjects: allSanityProject {
      nodes {
        id
        title
        image {
          asset {
            gatsbyImageData
          }
        }
        slug {
          current
        }
      }
    }
    sanityHome {
      _rawLayouts
      layouts {
        _key
        _type
        heading
        subheading
        link
        position
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
