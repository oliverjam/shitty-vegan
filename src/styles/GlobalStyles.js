import React from "react";
import { Global } from "@emotion/core";
import css from "@emotion/css/macro";

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        body,
        h1,
        h2,
        h3,
        p,
        img,
        ul,
        li,
        fieldset {
          margin: 0;
          padding: 0;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica,
            Arial, sans-serif;
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

        .react-tiny-popover-container {
          overflow: visible !important; /* disable stupid library code */
        }
      `}
    />
  );
}

export default GlobalStyles;
