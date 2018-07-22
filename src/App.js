import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import Calendar from './components/Calendar';
import Feedback from './components/Feedback';
import { Layout } from './components/styled/Layout';
import theme from './styles/theme';
import globalStyles from './styles/global';
import { moveDate } from './utils';

globalStyles(theme);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: {},
      streakStart: null,
    };
  }

  componentDidMount() {
    const state = JSON.parse(window.localStorage.getItem('shitty-ratings'));
    if (state) return this.setState(state);
  }

  setRating = ({ rating, selectedDate }) => {
    console.log({ rating, selectedDate });
    const { ratings, streakStart } = this.state;
    const newRatings = { ...ratings, [selectedDate]: { rating } };

    // const prevDay = moveDate(selectedDate, -1);
    // const prevRating = newRatings[prevDay] ? newRatings[prevDay].rating : 0;

    // const nextDay = moveDate(selectedDate, 1);
    // const nextRating = newRatings[nextDay] ? newRatings[nextDay].rating : 0;
    // const worseThanPrevDay = rating < prevRating || prevRating === 0;
    // const newStreakStart =
    //   betterThanPrevDay ? selectedDate ?  : streakStart;
    this.setState({ ratings: newRatings }, () => {
      window.localStorage.setItem('shitty-ratings', JSON.stringify(this.state));
    });
  };
  render() {
    const { ratings, streakStart } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Calendar ratings={ratings} setRating={this.setRating} />
          <Feedback ratings={ratings} streakStart={streakStart} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
