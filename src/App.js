import React, { Component } from 'react';
import styled from 'react-emotion/macro';
import { ThemeProvider } from 'emotion-theming';
import { Router } from '@reach/router';
import netlifyIdentity from 'netlify-identity-widget';

import theme from './styles/theme';
import Login from './views/Login';
import Home from './views/Home';
import Settings from './views/Settings';
import NotFound from './views/NotFound';

// const Login = ({ login }) => <button onClick={login}>Log in</button>;
const Layout = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`;

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
        <Layout>
          <Router>
            {!user ? (
              <Login path="/*" login={this.login} />
            ) : (
              [
                <Home path="/" user={user} key="home" />,
                <Settings
                  path="settings"
                  logout={this.logout}
                  user={user}
                  key="settings"
                />,
                <NotFound default key="404" />,
              ]
            )}
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
