import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled/macro";
import { Button } from "../components/styled/Form";

const Layout = styled.div`
  max-width: 30rem;
  min-height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  grid-gap: 2rem;
  margin: 0 auto;
  padding: 1rem;
`;

const BackLink = Button.withComponent(Link);

const NotFound = () => (
  <Layout>
    <h1>Sorry, we couldn't find the page you wanted.</h1>
    <BackLink to="/">Back to the calendar</BackLink>
  </Layout>
);

export default NotFound;
