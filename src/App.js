import React, { Component } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Router } from '@reach/router';
import netlifyIdentity from 'netlify-identity-widget';

import theme from './styles/theme';
import { Layout } from './components/styled/Layout';
import Home from './components/Home';
import Settings from './components/Settings';

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    netlifyIdentity.init();
    const user = netlifyIdentity.currentUser();
    if (user) this.setState({ user });
    netlifyIdentity.on('login', user => this.setState({ user }));
    netlifyIdentity.on('logout', user => this.setState({ user: null }));
  }

  render() {
    const { user } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Router>
            <Home path="/" user={user} />
            <Settings path="settings" user={user} />
          </Router>
        </Layout>
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
