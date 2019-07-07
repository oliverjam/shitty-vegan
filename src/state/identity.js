import React from "react";
import netlifyIdentity from "netlify-identity-widget";

export const IdentityContext = React.createContext();

export function IdentityProvider({ children }) {
  const [state, setState] = React.useState("initial");
  React.useEffect(() => {
    setState("loading");
    netlifyIdentity.init();
    const user = netlifyIdentity.currentUser();
    setState(user ? "loggedIn" : "loggedOut");

    netlifyIdentity.on("login", () => {
      netlifyIdentity.close();
      setState("loggedIn");
    });
    netlifyIdentity.on("logout", () => {
      netlifyIdentity.close();
      setState("loggedOut");
    });
  }, []);
  const value = React.useMemo(() => ({ state, netlifyIdentity }), [state]);
  return (
    <IdentityContext.Provider value={value}>
      {children}
    </IdentityContext.Provider>
  );
}

export function useIdentity() {
  const ctx = React.useContext(IdentityContext);
  if (!ctx)
    throw new Error("useIdentity must be called within an IdentityProvider");
  return ctx;
}
