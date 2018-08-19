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
      user: null,
      ratings: {},
      today: new Date(
        Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
      ).getTime(),
    };
  }

  componentDidMount() {
    netlifyIdentity.init();
    const user = netlifyIdentity.currentUser();
    if (user) this.setState({ user });
    netlifyIdentity.on('login', user => this.setState({ user }));
    netlifyIdentity.on('logout', user => this.setState({ user: null }));
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

  getHeaders = () => {
    const headers = { 'Content-Type': 'application/json' };
    if (netlifyIdentity.currentUser()) {
      return netlifyIdentity
        .currentUser()
        .jwt()
        .then(token => {
          console.log({ ...headers, Authorization: `Bearer ${token}` });
          return { ...headers, Authorization: `Bearer ${token}` };
        });
    }
  };
  render() {
    const { user, today, ratings } = this.state;
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
              <button onClick={() => netlifyIdentity.logout()}>Log out</button>
              <button
                onClick={() =>
                  this.getHeaders().then(headers =>
                    fetch('/.netlify/functions/hello', {
                      headers,
                      method: 'POST',
                      body: { test: 'test' },
                    })
                      .then(res => res.json())
                      .then(console.log)
                  )
                }
              >
                Hello
              </button>
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
