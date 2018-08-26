import React, { Component } from 'react';
import styled from 'react-emotion/macro';
import { ThemeProvider } from 'emotion-theming';
import { Router, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';
import netlifyIdentity from 'netlify-identity-widget';
import { Provider as SettingsProvider } from './state/settings';
import theme from './styles/theme';
import Login from './views/Login';
import GetStarted from './views/GetStarted';
import Home from './views/Home';
import Settings from './views/Settings';
import NotFound from './views/NotFound';

// const Login = ({ login }) => <button onClick={login}>Log in</button>;
const Layout = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`;

const Routes = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    netlifyIdentity.init();
    const user = netlifyIdentity.currentUser();
    if (user) this.setState({ user });
    netlifyIdentity.on('login', user =>
      this.setState({ user }, () => {
        netlifyIdentity.close();
      })
    );
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
        <SettingsProvider>
          <Layout>
            <Location>
              {({ location }) => (
                <PoseGroup>
                  <Routes key={location.key}>
                    <Router location={location}>
                      {!user
                        ? [
                            <Login path="/*" login={this.login} key="login" />,
                            <GetStarted
                              path="/get-started"
                              key="get-started"
                            />,
                          ]
                        : [
                            <Home
                              path="/"
                              user={user}
                              key="home"
                              netlifyIdentity={netlifyIdentity}
                            />,
                            <Settings
                              path="settings"
                              logout={this.logout}
                              user={user}
                              key="settings"
                            />,
                            <NotFound default key="404" />,
                          ]}
                    </Router>
                  </Routes>
                </PoseGroup>
              )}
            </Location>
          </Layout>
        </SettingsProvider>
      </ThemeProvider>
    );
  }
}

export default App;
