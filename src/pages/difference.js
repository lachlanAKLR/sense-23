import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import DiffLanding from '../components/DiffLanding';
import Layouts from '../components/Layouts';
import LandingAnimation from '../components/LandingAnimation';

const DifferenceStyles = styled.div`
  background-color: var(--grey);
`;

export default function DifferencePage({ data, transitionStatus }) {
  const { content } = data;
  const { layouts, _rawLayouts } = content;
  const title = content.pageTitle;
  return (
    <DifferenceStyles>
      <GlobalStyles />
      <LandingAnimation transitionStatus={transitionStatus} />
      <Nav title={title} />
      <DiffLanding content={content} />
      <Layouts layouts={layouts} _rawLayouts={_rawLayouts} />
      <Footer />
    </DifferenceStyles>
  );
}

export const query = graphql`
  query {
    content: sanityDifference {
      _rawLayouts(resolveReferences: { maxDepth: 10 })
      pageTitle
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
