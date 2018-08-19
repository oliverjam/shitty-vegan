import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import Calendar from './components/Calendar';
import Feedback from './components/Feedback';
import { Layout } from './components/styled/Layout';
import theme from './styles/theme';
import globalStyles from './styles/global';

globalStyles(theme);

class App extends Component {
  constructor(props) {
    super(props);
    const now = new Date();
    this.state = {
      ratings: {},
      today: new Date(
        Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
      ).getTime(),
    };
  }

  componentDidMount() {
    fetch('/.netlify/functions/hello')
      .then(res => res.json())
      .then(console.log);
    const state = JSON.parse(window.localStorage.getItem('shitty-ratings'));
    if (state) return this.setState(state);
  }

  setRating = ({ rating, selectedDate }) => {
    console.log({ rating, selectedDate });
    const { ratings } = this.state;
    const newRatings = { ...ratings, [selectedDate]: { rating } };
    this.setState({ ratings: newRatings }, () => {
      window.localStorage.setItem('shitty-ratings', JSON.stringify(this.state));
    });
  };
  render() {
    const { today, ratings } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Calendar
            today={today}
            ratings={ratings}
            setRating={this.setRating}
          />
          <Feedback today={today} ratings={ratings} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
