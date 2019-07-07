import React from "react";
import styled from "@emotion/styled/macro";

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const Number = styled.strong`
  font-size: 3rem;
`;

const ONE_DAY = 86400000;

// subtracts 1 as meat days don't count towards streaks
const ratingsGetter = ratings => day =>
  ratings[day] ? ratings[day].rating - 1 : 0;

const getStreak = (today, ratings) => {
  const getRating = ratingsGetter(ratings);
  const recurse = (currentDay, currentStreak) => {
    const yesterday = currentDay - ONE_DAY;
    const yesterdayRating = getRating(yesterday);
    const todayRating = getRating(currentDay);

    // break if there's no rating for the previous day
    // or today has been rated and is lower than the previous day
    if (!yesterdayRating || (todayRating && todayRating < yesterdayRating)) {
      return currentStreak;
    }
    return recurse(yesterday, currentStreak + 1);
  };
  // if today has been rated the minimum streak is 1
  const initialStreak = getRating(today) ? 1 : 0;
  return recurse(today, initialStreak);
};

const Streak = ({ today, ratings }) => {
  const streak = getStreak(today, ratings);
  return (
    <Container>
      <span>
        <Number>{streak}</Number> <small>day streak</small>
      </span>
    </Container>
  );
};

export default Streak;
