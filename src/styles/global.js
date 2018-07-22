import { injectGlobal } from 'react-emotion/macro';

const globalStyles = theme => injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
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
`;

export default globalStyles;
