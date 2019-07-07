import React from "react";

export const Store = React.createContext();

export class Provider extends React.Component {
  state = {
    showNotifications: false,
    notificationTime: "21:00",
    darkMode: false,
    colorBlindMode: false,
  };

  handleChange = ({ target }) => {
    console.log(target);
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    console.log({ [name]: value });
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Store.Provider
        value={{
          state: this.state,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </Store.Provider>
    );
  }
}
