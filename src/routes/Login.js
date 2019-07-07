import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled/macro";
import { Sugarplum } from "../components/icons";
import { buttonReset } from "../components/styled/utils";
import { useIdentity } from "../state/identity";

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1.5rem;
  display: grid;
  grid-template-rows: 1fr auto auto;
  grid-gap: 1rem;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 0.5rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 400;
`;

const Subtitle = styled.div`
  text-transform: uppercase;
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

function Login() {
  const { netlifyIdentity } = useIdentity();
  return (
    <Layout>
      <TitleWrapper>
        <Sugarplum />
        <Title>Shitty Vegan</Title>
        <Subtitle>The world's harshest critic</Subtitle>
      </TitleWrapper>
      <LinkButton to="/get-started">Get started</LinkButton>
      <TextButton onClick={() => netlifyIdentity.open()}>
        Already registered? Log in
      </TextButton>
    </Layout>
  );
}

export default Login;
