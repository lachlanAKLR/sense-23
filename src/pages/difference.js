import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import DiffLanding from '../components/DiffLanding';
import Layouts from '../components/Layouts';
import Animation from '../components/Animation';

const DifferenceStyles = styled.div`
  background-color: var(--grey);
`;

export const Head = () => (
  <>
    <title>Sense Constructions — Construction Done Consciously</title>
    <meta property="og:title" content="Sense Constructions" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="Sense Constructions" />
  </>
);

export default function DifferencePage({ data, transitionStatus }) {
  const { content } = data;
  const { layouts, _rawLayouts } = content;
  const title = content.pageTitle;
  return (
    <DifferenceStyles>
      <GlobalStyles />
      <Animation />
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
