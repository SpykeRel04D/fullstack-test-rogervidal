import { createGlobalStyle } from 'styled-components';

import { LIGHT, DARK, FONT_BASE_SIZE, FONT_PRIMARY } from './settings';

const GlobalStyle = createGlobalStyle`

*,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  html {
    font-size: ${FONT_BASE_SIZE}px;
  }

  body {
    background: ${DARK};
    color: ${LIGHT};
    font-family: ${FONT_PRIMARY};
    line-height: 1.5;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  #__next {
    min-height: 100vh;
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    text-decoration-skip-ink: auto;

    * {
      pointer-events: none;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default GlobalStyle;
