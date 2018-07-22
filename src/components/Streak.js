import React from 'react';
import styled from 'react-emotion/macro';
import { moveDate } from '../utils';

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const Number = styled.strong`
  font-size: 3rem;
`;

const getStreakCount = (today, ratings) => {
  let todayRating = ratings[today] ? ratings[today].rating : 0;
  let prevDay = moveDate(today, -1);
  let prevRating = ratings[prevDay] ? ratings[prevDay].rating : 0;
  if (todayRating < prevRating) return todayRating > 0 ? 1 : 0;

  let streak = todayRating > 0 && todayRating >= prevRating ? 1 : 0;
  while (prevRating > 0 && todayRating >= prevRating) {
    streak += 1;
    today = moveDate(today, -1);
    todayRating = ratings[today] ? ratings[today].rating : 0;
    prevDay = moveDate(today, -1);
    prevRating = ratings[prevDay] ? ratings[prevDay].rating : 0;
  }
  console.log({
    today: new Date(today),
    todayRating,
    prevDay: new Date(prevDay),
    prevRating,
  });
  return streak;
};

const Streak = ({ today, ratings }) => {
  const streak = getStreakCount(today, ratings);
  // const prevDay = moveDate(today, -1);
  // const prevRating = ratings[prevDay] ? ratings[prevDay].rating : 0;
  // const streakStartDate = new Date(streakStart);
  // console.log({
  //   today: new Date(today),
  //   streakStart: new Date(streakStart),
  //   difference: new Date(today - streakStart).getDate(),
  // });
  // const streak = new Date(today - streakStart).getDate();
  return (
    <Container>
      <span>
        <Number>{streak}</Number> <small>day streak</small>
      </span>
    </Container>
  );
};

export default Streak;
