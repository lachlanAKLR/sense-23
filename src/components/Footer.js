import React, { useEffect } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const FooterStyles = styled.div`
  padding: 100px 10px 30px 10px;

  .footer__inner {
    border-top: 0.5px solid black;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .footer__name,
  .footer__abn {
    grid-column: span 3;
  }

  .footer__contact,
  .footer__links {
    grid-column: span 4;
  }

  .footer__back,
  .footer__credit {
    grid-column: span 2;
  }

  .footer__acc {
    grid-column: span 6;
    max-width: 650px;
  }

  a {
    font-family: Remington;
    text-transform: uppercase;
  }

  .footer__links a,
  .footer__links li {
    font-size: 16px;
    line-height: 20px;
  }

  /* Mobile Styles */
  @media only screen and (max-width: 1100px) {
    padding: 30px 10px;

    .site__grid {
      display: block;
    }

    .footer__name,
    .footer__abn,
    .footer__acc {
      padding-bottom: 30px;
    }

    .footer__acc {
      width: 100%;
    }

    .footer__links,
    .footer__credit {
      width: 50%;
    }

    .footer__bottom {
      display: flex;
      gap: 0;
      flex-wrap: wrap;
    }

    .footer__back {
      position: relative;
      bottom: 0;
    }
  }
`;

export default function Footer() {
  const data = useStaticQuery(graphql`
    query settingsQuery {
      sanitySiteSettings {
        email
        abn
        acn
        linkedin
        instagram
      }
    }
  `);

  return (
    <FooterStyles>
      <footer className="footer__wrapper">
        <div className="footer__inner">
          <div className="footer__top site__grid">
            <h4 className="footer__name">
              © sense — construction, <br />
              done consciously
            </h4>
            <h4 className="footer__abn">
              ABN: {data.sanitySiteSettings.abn} <br />
              ACN: {data.sanitySiteSettings.acn}
            </h4>
            <h4 className="footer__contact">
              email:
              <a href={data.sanitySiteSettings.email}>
                info@senseconstructions.com
              </a>
              <br />
              <a href={data.sanitySiteSettings.instagram}>
                Insta:@senseconstuctions
              </a>
              <br />
              <a href={data.sanitySiteSettings.linkedin}>
                linkedin:sense-constructions
              </a>
            </h4>
            <h4 className="footer__back">
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
              >
                Back to Top
              </button>
            </h4>
          </div>
          <div className="footer__bottom site__grid">
            <h4 className="footer__acc">
              WE ACKNOWLEDGE THE DARKINYUNG PEOPLE OF THE DARKINJUNG LAND AS THE
              TRADITIONAL CUSTODIANS OF THE COUNTRY we OPERATE ON. WE PAY OUR
              RESPECTS TO ELDERS PAST, PRESENT AND emerging, and EXTEND THAT
              RESPECT TO ALL FIRST NATIONS PEOPLE.
            </h4>
            <div className="footer__links">
              <ul>
                <li>
                  <Link to="/">FAQ's</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">Link</Link>
                </li>
                <li>
                  <Link to="/">Link</Link>
                </li>
              </ul>
            </div>
            <h4 className="footer__credit">
              Design & Build <br />
              by AKLR
            </h4>
          </div>
        </div>
      </footer>
    </FooterStyles>
  );
}
