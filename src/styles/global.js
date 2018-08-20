import { injectGlobal } from 'react-emotion/macro';

const globalStyles = theme => injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  p,
  img,
  ul,
  li,
  fieldset {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
    color: #555;
  background-color: ${theme.bgLight};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input {
    font-size: inherit;
    font-family: inherit;
    border: none;
    background: none;
    color: inherit;
  }
`;

export default globalStyles;
