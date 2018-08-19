import React from 'react';
import styled from 'react-emotion/macro';
import { Link } from '@reach/router';
import Avatar from './styled/Avatar';
import { Toggle, TextButton, Button } from './styled/Form';

const Form = styled.div`
  padding: 2rem;
  & > * + * {
    margin-top: 2rem;
  }
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
`;

const Settings = ({ user, logout }) => (
  <React.Fragment>
    <Form>
      <h1>Settings</h1>
      <Avatar user={user} />
      <Subsection>
        <legend>
          <Subheading>Notifications</Subheading>
        </legend>
        <Row>
          <label htmlFor="toggleNotifications">Show notifications</label>
          <Toggle id="toggleNotifications" />
        </Row>
        <Row>
          <label htmlFor="notificationTime">Notification time</label>
          <input type="text" id="notificationTime" defaultValue="9pm" />
        </Row>
      </Subsection>
      <Subsection>
        <legend>
          <Subheading>App settings</Subheading>
        </legend>
        <Row>
          <label htmlFor="darkMode">Dark mode</label>
          <Toggle id="darkMode" />
        </Row>
        <Row>
          <label htmlFor="colorBlindMode">Colour-blind mode</label>
          <Toggle id="colorBlindMode" />
        </Row>
        <Row>
          <label htmlFor="clearData">Clear stored data</label>
          <TextButton type="button" textColor="bad" id="clearData">
            Delete
          </TextButton>
        </Row>
      </Subsection>
      <Button onClick={logout}>Log out</Button>
    </Form>
    <Close>
      <Link to="/">&times;</Link>
    </Close>
  </React.Fragment>
);

export default Settings;
