import React from "react";
import styled from "@emotion/styled/macro";
import { ThemeProvider } from "emotion-theming";
import { IdentityProvider } from "./state/identity";
import GlobalStyles from "./styles/GlobalStyles";
import { Provider as SettingsProvider } from "./state/settings";
import theme from "./styles/theme";
import Routes from "./routes";

// const Login = ({ login }) => <button onClick={login}>Log in</button>;
const Layout = styled.div`
  max-width: 40rem;
  margin: 0 auto;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <IdentityProvider>
        <SettingsProvider>
          <GlobalStyles />
          <Layout>
            <Routes />
          </Layout>
        </SettingsProvider>
      </IdentityProvider>
    </ThemeProvider>
  );
}

export default App;
