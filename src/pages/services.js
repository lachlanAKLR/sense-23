import React from 'react';
import { graphql } from 'gatsby';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ServiceBlock from '../components/ServiceBlock';
import ServiceContent from '../components/ServiceContent';

export default function ServicesPage({ data }) {
  const doorServices = data.doorServices.nodes;
  const floorServices = data.floorServices.nodes;
  const groutingServices = data.groutingServices.nodes;
  const { content } = data;
  const title = content.pageTitle;

  return (
    <>
      <GlobalStyles />
      <Nav title={title} />
      <ServiceContent content={content} />
      <ServiceBlock
        doorServices={doorServices}
        floorServices={floorServices}
        groutingServices={groutingServices}
        content={content}
      />
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    doorServices: allSanityService(
      filter: { sector: { in: ["door-packages"] } }
    ) {
      nodes {
        title
        sector
        _rawContent
        id
      }
    }
    floorServices: allSanityService(
      filter: { sector: { in: ["floor-preparation"] } }
    ) {
      nodes {
        title
        sector
        _rawContent
        id
      }
    }
    groutingServices: allSanityService(
      filter: { sector: { in: ["grouting-remediation"] } }
    ) {
      nodes {
        title
        sector
        _rawContent
        id
      }
    }
    content: sanityServicesPage {
      heading
      pageTitle
      image {
        asset {
          gatsbyImageData
        }
      }
      _rawServiceContent
      subheading
      firstSubheading
      firstText
      firstImage {
        asset {
          gatsbyImageData
        }
      }
      secondSubheading
      secondText
      secondImage {
        asset {
          gatsbyImageData
        }
      }
      thirdSubheading
      thirdText
      thirdImage {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;
