import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ProjectsGrid from '../components/ProjectsGrid';
import ProjectsIndex from '../components/ProjectsIndex';
import ProjectsInfo from '../components/ProjectsInfo';

export default function ProjectsPage({ data }) {
  const commercialProjects = data.commercialProjects.nodes;
  const civilProjects = data.civilProjects.nodes;
  const resProjects = data.resProjects.nodes;
  return (
    <>
      <GlobalStyles />
      <Nav />
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
  }
`;
