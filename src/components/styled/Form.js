import React from 'react';
import styled, { css } from 'react-emotion/macro';
import { visuallyHidden, buttonReset } from './utils';

const ToggleContainer = styled.label`
  display: grid;
  align-items: center;
`;

const HiddenInput = styled.input`
  ${visuallyHidden};
`;

const ToggleBg = styled.div`
  grid-area: 1 / 1;
  width: 3rem;
  height: 1.5rem;
  border-radius: 1rem;
  background-color: hsl(200, 10%, 70%);
  box-shadow: inset 0 0 3px 3px hsla(200, 10%, 40%, 0.4);
  ${HiddenInput}:checked ~ & {
    background-color: hsl(140, 60%, 80%);
  }
`;

const TOGGLE_SIZE = 2;

const ToggleIndicator = styled.div`
  grid-area: 1 / 1;
  width: ${TOGGLE_SIZE}rem;
  height: ${TOGGLE_SIZE}rem;
  border-radius: 50%;
  box-shadow: 0 2px 4px hsla(200, 10%, 40%, 0.6),
    -1px -1px 1px hsla(200, 10%, 40%, 0.3);
  background-color: white;
  transition: transform 0.2s;
  transform: translateX(-25%);
  /* opacity: 0.3; */
  ${HiddenInput}:checked ~ & {
    transform: translateX(75%);
    background-color: hsl(140, 70%, 30%);
  }
  ${HiddenInput}:focus ~ & {
    border: 1px dashed blue;
  }
`;

export const Toggle = ({ id, ...rest }) => (
  <ToggleContainer htmlFor={id}>
    <HiddenInput {...rest} id={id} type="checkbox" />
    <ToggleBg />
    <ToggleIndicator />
  </ToggleContainer>
);

export const TextButton = styled.button`
  ${buttonReset};
  ${p =>
    p.textColor &&
    css`
      color: ${p.theme[p.textColor] || p.textColor};
    `} text-transform: uppercase;
`;

export const Button = styled.button`
  ${buttonReset};
  display: block;
  width: 100%;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 0 2px 4px hsla(200, 10%, 40%, 0.4);
  text-transform: uppercase;
  background-color: #fff;
`;
