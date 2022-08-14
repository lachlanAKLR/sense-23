import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import Footer from '../components/Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Nav from '../components/Nav';
import ContactForm from '../components/ContactForm';

const ContactStyles = styled.div`
  padding: 140px 30px 100px 30px;

  h2 {
    grid-column: span 7;
  }

  p {
    grid-column: span 4;
  }

  .contact__form {
    grid-column-start: 8;
    grid-column-end: 12;
  }

  .contact__top {
    padding-bottom: 100px;
  }

  input,
  textarea {
    width: 100%;
    padding-top: 25px;
    border-style: none;
    border-radius: 0;
    border-bottom: 0.5px solid var(--black);
    resize: none;
    outline: none;
    line-height: 50px;
  }

  textarea {
    height: 75px;
    padding-top: 40px;
    line-height: normal;
  }

  button {
    padding-top: 30px;
  }

  .contact__image {
    grid-column: span 3;
  }
`;

export default function ContactPage({ data }) {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <ContactStyles>
        <div className="contact__wrapper">
          <div className="contact__inner">
            <div className="contact__top site__grid">
              <h2>{data.contact.title}</h2>
              <p>{data.contact.headline}</p>
            </div>
            <div className="contact__bottom site__grid">
              <div className="contact__image">
                <GatsbyImage
                  image={data.contact.image.asset.gatsbyImageData}
                  alt={`${data.contact.title} image`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </ContactStyles>
      <Footer />
    </>
  );
}

export const query = graphql`
  query ContactQuery {
    contact: sanityContact {
      title
      headline
      image {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`;
