import React, { Component } from 'react';
import styled from 'react-emotion/macro';
import Level from './Level';
import Streak from './Streak';

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  background-color: #fff;
`;

const Message = styled.p`
  grid-column: 1 / -1;
  font-size: 2rem;
  line-height: 1.1;
`;

const messages = [
  ['Hurry up and fill something in'],
  ["You're a piece of shit", 'Stop getting drunk and binging on wings'],
  ["That's progress at least"],
  ['Milk is disgusting', 'How do you like your eggs in the morning?'],
  ["You're doing great sweetie"],
];

const getMessage = rating => {
  const choices = messages[rating];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

class Feedback extends Component {
  render() {
    const { ratings, streakStart } = this.props;
    const now = new Date();
    const today = new Date(
      Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
    ).getTime();
    const rating = ratings[today] ? ratings[today].rating : 0;
    return (
      <Container>
        <Message>{getMessage(rating)}</Message>
        <Level ratings={ratings} />
        <Streak today={today} ratings={ratings} streakStart={streakStart} />
      </Container>
    );
  }
}

export default Feedback;
