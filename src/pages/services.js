import React from 'react';
import { graphql } from 'gatsby';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ServiceContent from '../components/ServiceContent';
import Animation from '../components/Animation';
import ServiceType from '../components/ServiceType';
import ColourCta from '../components/ColourCta';

export const Head = () => (
  <>
    <title>Sense Constructions — Construction Done Consciously</title>
    <meta property="og:title" content="Sense Constructions" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="Sense Constructions" />
  </>
);

export default function ServicesPage({ data }) {
  const { content } = data;
  const title = content.pageTitle;
  const { firstServices } = content;
  const { secondServices } = content;
  const { thirdServices } = content;
  const { _rawFirstServices } = content;
  const { _rawSecondServices } = content;
  const { _rawThirdServices } = content;
  const { cta } = data;

  return (
    <>
      <GlobalStyles />
      <Animation />
      <Nav title={title} />
      <ServiceContent content={content} />
      <ServiceType
        heading={content.firstSubheading}
        content={content.firstText}
        image={content.firstImage.asset.gatsbyImageData}
        layouts={firstServices}
        _rawLayouts={_rawFirstServices}
      />
      <ServiceType
        heading={content.secondSubheading}
        content={content.secondText}
        image={content.secondImage.asset.gatsbyImageData}
        layouts={secondServices}
        _rawLayouts={_rawSecondServices}
      />
      <ServiceType
        heading={content.thirdSubheading}
        content={content.thirdText}
        image={content.thirdImage.asset.gatsbyImageData}
        layouts={thirdServices}
        _rawLayouts={_rawThirdServices}
      />
      <ColourCta cta={cta} />
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
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
      _rawSecondServices
      _rawFirstServices
      _rawThirdServices
      firstServices {
        _key
        _type
        heading
        image {
          asset {
            gatsbyImageData
          }
        }
      }
      secondServices {
        _key
        _type
        heading
        image {
          asset {
            gatsbyImageData
          }
        }
      }
      thirdServices {
        _key
        _type
        heading
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
    cta: sanityGreyCta {
      cta
      text
      link
      byline
      _type
    }
  }
`;
