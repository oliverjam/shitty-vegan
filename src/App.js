import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Router } from '@reach/router';
import netlifyIdentity from 'netlify-identity-widget';

import theme from './styles/theme';
import Home from './components/Home';
import Settings from './components/Settings';

const Login = ({ login }) => <button onClick={login}>Log in</button>;

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    netlifyIdentity.init();
    const user = netlifyIdentity.currentUser();
    if (user) this.setState({ user });
    netlifyIdentity.on('login', user => this.setState({ user }));
    netlifyIdentity.on('logout', user => {
      netlifyIdentity.close();
      this.setState({ user: null });
    });
  }

  logout = () => {
    netlifyIdentity.logout();
  };

  login = () => {
    netlifyIdentity.open();
  };

  render() {
    const { user } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Router>
          {!user ? (
            <Login path="/" login={this.login} />
          ) : (
            <Home path="/" user={user} />
          )}
          <Settings path="settings" logout={this.logout} user={user} />
        </Router>
      </ThemeProvider>
    );
  }
  // getHeaders = () => {
  //   const headers = { 'Content-Type': 'application/json' };
  //   if (netlifyIdentity.currentUser()) {
  //     return netlifyIdentity
  //       .currentUser()
  //       .jwt()
  //       .then(token => {
  //         console.log({ ...headers, Authorization: `Bearer ${token}` });
  //         return { ...headers, Authorization: `Bearer ${token}` };
  //       });
  //   }
  // };
}

export default App;
