import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ProjectsGrid from '../components/ProjectsGrid';
import ProjectsIndex from '../components/ProjectsIndex';
import ProjectsInfo from '../components/ProjectsInfo';
import LandingAnimation from '../components/LandingAnimation';
import ColourCta from '../components/ColourCta';

export const Head = () => (
  <>
    <title>Sense Constructions — Construction Done Consciously</title>
    <meta property="og:title" content="Sense Constructions" />
    <meta property="og:type" content="article" />
    <meta property="og:description" content="Sense Constructions" />
  </>
);

export default function ProjectsPage({ data, transitionStatus }) {
  const commercialProjects = data.commercialProjects.nodes;
  const civilProjects = data.civilProjects.nodes;
  const resProjects = data.resProjects.nodes;
  const title = data.sanityProjects.pageTitle;
  const { cta } = data;
  return (
    <>
      <GlobalStyles />
      <LandingAnimation transitionStatus={transitionStatus} />
      <Nav title={title} />
      <ProjectsInfo />
      <ProjectsGrid
        commercialProjects={commercialProjects}
        civilProjects={civilProjects}
        resProjects={resProjects}
      />
      <ProjectsIndex
        commercialProjects={commercialProjects}
        civilProjects={civilProjects}
        resProjects={resProjects}
      />
      <ColourCta cta={cta} />
      <Footer />
    </>
  );
}

export const query = graphql`
  query ProjectsQuery {
    commercialProjects: allSanityProject(
      filter: { sector: { in: ["commercial"] }, featured: { eq: true } }
    ) {
      nodes {
        id
        featured
        title
        sector
        builder
        work
        location
        extent
        description
        completion
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
    civilProjects: allSanityProject(
      filter: { sector: { in: ["civil"] }, featured: { eq: true } }
    ) {
      nodes {
        id
        featured
        title
        sector
        builder
        work
        location
        extent
        description
        completion
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
    resProjects: allSanityProject(
      filter: {
        sector: { in: ["commercial-residential"] }
        featured: { eq: true }
      }
    ) {
      nodes {
        id
        featured
        title
        sector
        builder
        work
        location
        extent
        description
        completion
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
    sanityProjects {
      pageTitle
    }
    cta: sanityBlackCta {
      cta
      text
      link
      byline
      _type
    }
  }
`;
