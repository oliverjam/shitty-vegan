import React from 'react';

class Login extends React.Component {
  render() {
    return <button onClick={this.props.login}>Log in</button>;
  }
}

export default Login;
