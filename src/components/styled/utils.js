import { css } from 'emotion/macro';

export const visuallyHidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

export const buttonReset = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 0.75em;
  border: none;
  background: none;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  text-align: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
`;
