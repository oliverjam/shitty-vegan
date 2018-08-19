import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import netlifyIdentity from 'netlify-identity-widget';
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
    netlifyIdentity.init();
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
    const user = netlifyIdentity.currentUser();
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          {user ? (
            <React.Fragment>
              <Calendar
                today={today}
                ratings={ratings}
                setRating={this.setRating}
              />
              <Feedback today={today} ratings={ratings} />
            </React.Fragment>
          ) : (
            <button onClick={() => netlifyIdentity.open()}>Log in</button>
          )}
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
