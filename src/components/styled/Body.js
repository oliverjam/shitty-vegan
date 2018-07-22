import styled from 'react-emotion/macro';

export const Body = styled.body`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1.125em;
  font-size: calc(1em + 0.25vw);
  color: ${{theme} => theme.textDark};
`;
