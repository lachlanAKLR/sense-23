import React from 'react';
import { graphql } from 'gatsby';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import DiffLanding from '../components/DiffLanding';
import Layouts from '../components/Layouts';

export default function DifferencePage({ data }) {
  const { content } = data;
  const { layouts, _rawLayouts } = content;
  return (
    <>
      <GlobalStyles />
      <Nav />
      <DiffLanding content={content} />
      <Layouts layouts={layouts} _rawLayouts={_rawLayouts} />
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    content: sanityDifference {
      _rawLayouts(resolveReferences: { maxDepth: 10 })
      details
      heading
      image {
        asset {
          gatsbyImageData
        }
      }
      layouts {
        ... on SanityTextImage {
          _key
          _type
          position
          image {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityTitleContent {
          _key
          _type
          heading
        }
        ... on SanityDropdownBlock {
          _key
          _type
          heading
          image {
            asset {
              gatsbyImageData
            }
          }
        }
        ... on SanityTextStack {
          _key
          _type
          stackContent {
            heading
          }
        }
      }
    }
  }
`;
