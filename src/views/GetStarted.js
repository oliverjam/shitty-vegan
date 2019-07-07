import React from 'react';
import styled from '@emotion/styled/macro';
import { Sugarplum } from '../components/icons';
import { buttonReset } from '../components/styled/utils';

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1.5rem;
  display: grid;
  justify-items: center;
  align-content: center;
  grid-gap: 0.5rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 400;
`;

const Button = styled.button`
  ${buttonReset};
  height: 3rem;
  border-radius: 2rem;
  box-shadow: 0 2px 4px hsla(200, 10%, 40%, 0.4);
  text-transform: uppercase;
  background-color: #fff;
`;

class Login extends React.Component {
  render() {
    return (
      <Layout>
        <Sugarplum />
        <Title>Welcome to Shitty Vegan</Title>
        <p>Helps keep track of how much of a piece of shit you are!</p>
        <Button onClick={this.props.login}>Get started</Button>
      </Layout>
    );
  }
}

export default Login;
