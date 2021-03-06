import React from "react";
import styled from "@emotion/styled/macro";
import { Link } from "@reach/router";
import { Store } from "../state/settings";
import Avatar from "../components/styled/Avatar";
import { Toggle, TextButton, Button } from "../components/styled/Form";
import { useIdentity } from "../state/identity";

const Layout = styled.div`
  position: relative;
`;

const Form = styled.form`
  padding: 2rem;
  & > * + * {
    margin-top: 2.25rem;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  & > * + * {
    /* margin-top: 0.5rem; */
  }
`;

const LabelHeading = styled.span`
  font-size: 1.25rem;
`;

const Close = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  line-height: 1;
  font-size: 2rem;
`;

const Subsection = styled.fieldset`
  padding: 0;
  border: none;
  & > * + * {
    margin-top: 1rem;
  }
`;

const Subheading = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Settings = () => {
  const { netlifyIdentity } = useIdentity();
  const user = netlifyIdentity.currentUser();
  return (
    <Store.Consumer>
      {({
        state: {
          showNotifications,
          notificationTime,
          darkMode,
          colorBlindMode,
        },
        handleChange,
      }) => (
        <Layout>
          <Form>
            <h1>Settings</h1>
            <Avatar user={user} />
            <Subsection>
              <legend>
                <Subheading>Notifications</Subheading>
              </legend>
              <Row>
                <Label htmlFor="showNotifications">
                  <LabelHeading>Show notifications</LabelHeading>
                  <span>Daily reminders to log eating</span>
                </Label>
                <Toggle
                  name="showNotifications"
                  id="showNotifications"
                  checked={showNotifications}
                  onChange={handleChange}
                />
              </Row>
              <Row>
                <Label htmlFor="notificationTime">
                  <LabelHeading>Notification time</LabelHeading>
                  <span>Set when you want to be reminded</span>
                </Label>
                <input
                  type="time"
                  name="notificationTime"
                  id="notificationTime"
                  value={notificationTime}
                  onChange={handleChange}
                />
              </Row>
            </Subsection>
            <Subsection>
              <legend>
                <Subheading>App settings</Subheading>
              </legend>
              <Row>
                <Label htmlFor="darkMode">
                  <LabelHeading>Dark mode</LabelHeading>
                  <span>Easy on the eyes</span>
                </Label>
                <Toggle
                  name="darkMode"
                  id="darkMode"
                  checked={darkMode}
                  onChange={handleChange}
                />
              </Row>
              <Row>
                <Label htmlFor="colorBlindMode">
                  <LabelHeading>Colour-blind mode</LabelHeading>
                  <span>Use icons rather than colours</span>
                </Label>
                <Toggle
                  name="colorBlindMode"
                  id="colorBlindMode"
                  checked={colorBlindMode}
                  onChange={handleChange}
                />
              </Row>
              <Row>
                <Label htmlFor="clearData">
                  <LabelHeading>Clear stored data</LabelHeading>
                  <span>Nuke it all</span>
                </Label>
                <TextButton type="button" textColor="bad" id="clearData">
                  Delete
                </TextButton>
              </Row>
            </Subsection>
            <Button onClick={() => netlifyIdentity.logout()}>Log out</Button>
          </Form>
          <Close>
            <Link to="/" aria-label="Back to calendar">
              &times;
            </Link>
          </Close>
        </Layout>
      )}
    </Store.Consumer>
  );
};

export default Settings;
