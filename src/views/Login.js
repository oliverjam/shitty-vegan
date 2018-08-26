import React from 'react';
import { Link } from '@reach/router';
import styled from 'react-emotion/macro';
import { buttonReset } from '../components/styled/utils';

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1.5rem;
  display: grid;
  grid-template-rows: 1fr auto auto;
  grid-gap: 1rem;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 400;
  text-align: center;
`;

const Subtitle = styled.div`
  margin-top: 0.5rem;
  text-transform: uppercase;
  text-align: center;
`;

const LinkButton = styled(Link)`
  ${buttonReset};
  height: 3rem;
  border-radius: 2rem;
  box-shadow: 0 2px 4px hsla(200, 10%, 40%, 0.4);
  text-transform: uppercase;
  background-color: #fff;
`;

const TextButton = styled.button`
  ${buttonReset};
`;

class Login extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <Title>Shitty Vegan</Title>
          <Subtitle>The world's harshest critic</Subtitle>
        </div>
        <LinkButton to="/get-started">Get started</LinkButton>
        <TextButton onClick={this.props.login}>
          Already registered? Log in
        </TextButton>
      </Layout>
    );
  }
}

export default Login;
