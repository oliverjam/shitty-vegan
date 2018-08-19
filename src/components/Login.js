import React from 'react';
import netlifyIdentity from 'netlify-identity-widget';

class Login extends React.Component {
  componentDidMount() {
    netlifyIdentity.init();
  }
  handleIdentity = () => {
    netlifyIdentity.open();
  };
  render() {
    console.log(netlifyIdentity.currentUser());
    return <button onClick={this.handleIdentity}>Log in</button>;
  }
}

export default Login;
