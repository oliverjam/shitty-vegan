import React from 'react';
import styled from 'react-emotion/macro';

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const Svg = styled.svg`
  grid-column: 1;
  grid-row: 1;
  width: 9rem;
  fill: none;
  stroke-width: 0.1;
`;

const Number = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Strong = styled.strong`
  font-size: 2rem;
`;

const Level = ({ ratings }) => {
  const level = Object.entries(ratings).reduce(
    (total, [, { rating }]) => total + (rating - 1) / 3,
    0
  );
  const progress = level % 1;
  const dashLength = progress * Math.PI;
  const gapLength = Math.PI;
  return (
    <Container>
      <Svg viewBox="-0.05 -0.05 1.1 1.1">
        <path
          d="M0.5 0 A0.5 0.5 0 0 1 0.5 1 A0.5 0.5 0 0 1 0.5 0"
          stroke="#ccc"
        />
        <path
          id="pie"
          d="M0.5 0 A0.5 0.5 0 0 1 0.5 1 A0.5 0.5 0 0 1 0.5 0"
          stroke="palevioletred"
          strokeDasharray={`${dashLength}, ${gapLength}`}
        />
        <text width="2em" height="2em" x="0.5" y="0.5">
          {level}
        </text>
      </Svg>
      <Number>
        <small>lvl</small>
        <Strong>{Math.floor(level)}</Strong>
      </Number>
    </Container>
  );
};

export default Level;
