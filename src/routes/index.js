import React from "react";
import { Location, Router } from "@reach/router";
import posed, { PoseGroup } from "react-pose";
import Login from "./Login";
import GetStarted from "./GetStarted";
import Home from "./Home";
import Settings from "./Settings";
import NotFound from "./NotFound";
import { useIdentity } from "../state/identity";

const RouteTransitions = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

const Loading = () => null;

function Routes() {
  const identity = useIdentity();
  return (
    <Location>
      {({ location }) => (
        <PoseGroup>
          <RouteTransitions key={location.key}>
            <Router location={location}>
              {identity.state === "loading" ? (
                <Loading path="/*" />
              ) : identity.state === "loggedIn" ? (
                [
                  <Home path="/" key="home" />,
                  <Settings path="settings" key="settings" />,
                  <NotFound default key="404" />,
                ]
              ) : (
                [
                  <Login path="/*" key="login" />,
                  <GetStarted path="/get-started" key="get-started" />,
                ]
              )}
            </Router>
          </RouteTransitions>
        </PoseGroup>
      )}
    </Location>
  );
}

export default Routes;
