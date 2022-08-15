import { createGlobalStyle } from 'styled-components';

import remington from '../assets/fonts/LTCRemington.woff';
import everettMedium from '../assets/fonts/TWKEverett-Medium-web.woff';
import everettRegular from '../assets/fonts/TWKEverett-Regular-web.woff';
import everettItalic from '../assets/fonts/TWKEverett-RegularItalic-web.woff';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: Remington;
    src: url(${remington});
   }

  @font-face {
    font-family: EverettMedium;
    src: url(${everettMedium});  
   }

  @font-face {
  font-family: EverettRegular; 
  src: url(${everettRegular});   
  } 

  @font-face {
  font-family: EverettItalic; 
  src: url(${everettItalic});  
  } 

  .site__grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 30px;
  }

  .half__grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 30px;
  }

  html, .service__title button {
    font-family: EverettRegular, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: normal;
    text-transform: none;
  }

  h1 {
    font-family: EverettMedium;
    font-size: 64px;
    line-height: 72px;
    text-transform: uppercase;
    font-weight: normal;
  }

  h2 {
    font-size: 36px;
    line-height: 43px;
    text-transform: uppercase;
    font-weight: normal;
  }

  h3, .tab-list-item {
    font-size: 24px;
    line-height: 29px;
    font-weight: normal;
  }

  h4, button, input, textarea {
    font-family: Remington;
    font-size: 16px;
    line-height: 23px; 
    text-transform: uppercase;
    font-weight: normal;
  }

  .service__title button, p, li {
    font-size: 20px;
    line-height: 24px;
  }


  a {
    color: var(--black);
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  :root {
    --white: #FFFFFF;
    --black: #000000;
    --grey: #E5E5E5; 
  }

   /* .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }  */

  img {
    max-width: 100%;
  }  

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    margin: 0;
    padding: 0;
  } 

  button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	cursor: pointer;
	outline: inherit;
  }


  /* Mobile Global Styles */

  @media only screen and (max-width: 1100px) {

  h1 {
    font-size: 24px;
    line-height: 30px;
  }

  h2 {
    font-size: 18px;
    line-height: 26px;
  }

  h3 {
    font-size: 18px;
    line-height: 24px;
  }

  h4, button, input, textarea {
    font-size: 14px;
    line-height: 20px; 
  }

  .service__title button, p, li, .tab-list-item {
    font-size: 16px;
    line-height: 22px;
  }

}


  /* Animations */


  /* Link Spin on Hover */


  .page__link {
    position: absolute;
    transition: all ease-in-out .3s;
  }

  h4:hover > .page__link {
    transform: translateX(-2px) translateY(-1px) rotate(90deg);
    transition: all ease-in-out .3s;
  }

  .link__text {
    padding-left: 20px
  }


  /* Dropdowns */

    .service__content::-webkit-scrollbar {
    display: none;
  }

  .service__content {
    -ms-overflow-style: none; 
    scrollbar-width: none;  
  }

  .hidden {
    height: 0px;
    opacity: 0;
    pointer-events: none;
    transition: all ease-in-out .3s;
    overflow-y: scroll;
  }

  .visible {
    height: 250px;
    transition: all ease-in-out .3s;
    overflow-y: scroll;
  }



`;

export default GlobalStyles;
