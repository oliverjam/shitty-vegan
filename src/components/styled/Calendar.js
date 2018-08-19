import styled from 'react-emotion/macro';
import { buttonReset } from './utils';

const COLUMN_COUNT = 7;
const DAY_SIZE = 100 / COLUMN_COUNT;

export const Section = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${COLUMN_COUNT}, ${DAY_SIZE}vw);
  grid-template-rows: 4rem repeat(6, ${DAY_SIZE}vw);
  justify-content: center;
`;

export const SectionTitle = styled.h2``;

const getColor = ({ rating, theme }) => theme.ratings[rating];

export const Day = styled.button`
  ${buttonReset};
  display: grid;
  place-items: center;
  grid-column: ${({ firstDay }) => (firstDay ? `${firstDay}` : 'initial')};
  &:focus > span {
    border: 1px dashed blue;
  }
`;

export const DayIndicator = styled.span`
  position: relative;
  width: ${DAY_SIZE * 0.66}vw;
  height: ${DAY_SIZE * 0.66}vw;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: ${p => (p.rating > 0 ? 'white' : 'inherit')};
  /* hack to increase specificity */
  &&& {
    background-color: ${getColor};
  }
  &[aria-current='date'] {
    background-color: hsl(200, 10%, 80%);
    box-shadow: inset 0 0 5px 3px hsla(200, 10%, 50%, 0.4);
  }
  &::before {
    content: '';
    display: ${p => (p.showStreak ? 'block' : 'none')};
    position: absolute;
    width: 250%;
    height: 100%;
    right: 0;
    opacity: 0.5;
    border-radius: ${DAY_SIZE * 0.66}vw;
    background-color: ${getColor};
    z-index: -10;
  }
`;

export const NavBar = styled.div`
  grid-row: 1;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: auto 3rem 12ch 3rem auto;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  padding: 0 0.5rem;
`;

export const Button = styled.button`
  ${buttonReset};
  width: 3rem;
  height: 3rem;
  transition: transform 0.2s;
  &:hover,
  &:focus {
    /* color: ${props => props.theme.textLight};
    background-color: ${props => props.theme.bgDark}; */
    transform: scaleY(0.75);
  }
`;
