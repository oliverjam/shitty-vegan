import React, { Component } from 'react';
import { Link } from '@reach/router';
import { DateValue } from 'react-values';
import Popover from 'react-tiny-popover';
import {
  Section,
  SectionTitle,
  Day,
  DayIndicator,
  NavBar,
  Button,
} from './styled/Calendar';
import { Sugarplum, Menu, Left, Right } from './icons';
import SelectRating from './SelectRating';

const getDaysInMonth = (year, month) => {
  const length = new Date(year, month + 1, 0).getDate();
  return Array.from({ length }, (_, i) => ({
    rating: 0,
    fullDate: new Date(Date.UTC(year, month, i + 1)).getTime(),
    date: i + 1,
  }));
};

class Calendar extends Component {
  state = {
    selectedDate: null,
  };

  handleClick = selectedDate => () => {
    this.setState({ selectedDate });
  };

  setRating = e => {
    const { selectedDate } = this.state;
    const rating = parseInt(e.target.value, 10);
    this.props.setRating({ rating, selectedDate });
    this.setState({ selectedDate: null });
  };

  render() {
    const { today, ratings } = this.props;
    const { selectedDate } = this.state;
    return (
      <DateValue>
        {({ value, year, month, date, incrementMonth, decrementMonth }) => {
          const days = getDaysInMonth(year, month);
          const monthName = value.toLocaleDateString('en-GB', {
            month: 'long',
          });
          const firstDay = new Date(year, month).getDay();
          return (
            <Section key={monthName}>
              <NavBar>
                <Sugarplum width="24" />
                <Button onClick={() => decrementMonth(1)}>
                  <Left />
                </Button>
                <SectionTitle>{monthName}</SectionTitle>
                <Button onClick={() => incrementMonth(1)}>
                  <Right />
                </Button>
                <Link to="/settings">
                  <Menu />
                </Link>
              </NavBar>

              {days.map((day, i) => {
                const rating = ratings[day.fullDate]
                  ? ratings[day.fullDate].rating
                  : 0;
                const prevDay = days[i - 1];
                const prevDayRating =
                  prevDay && ratings[prevDay.fullDate]
                    ? ratings[prevDay.fullDate].rating
                    : 0;
                const showStreak =
                  i > 0 && prevDayRating > 0 && rating >= prevDayRating;
                return (
                  <Popover
                    key={i}
                    isOpen={selectedDate === day.fullDate}
                    position={'bottom'}
                    onClickOutside={() => this.setState({ selectedDate: null })}
                    content={({ position, targetRect, popoverRect }) => (
                      <SelectRating
                        ratings={ratings}
                        date={day.fullDate}
                        setRating={this.setRating}
                        position={position}
                        targetRect={targetRect}
                        popoverRect={popoverRect}
                      />
                    )}
                  >
                    <Day
                      firstDay={i === 0 ? firstDay : undefined}
                      showStreak={showStreak}
                      onClick={this.handleClick(day.fullDate)}
                    >
                      <DayIndicator
                        rating={rating}
                        showStreak={showStreak}
                        aria-current={day.fullDate === today ? 'date' : null}
                      >
                        {day.date}
                      </DayIndicator>
                    </Day>
                  </Popover>
                );
              })}
            </Section>
          );
        }}
      </DateValue>
    );
  }
}

export default Calendar;
