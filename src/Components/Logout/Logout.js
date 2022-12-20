import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("users");
    window.location.replace("/");
  }
  render() {
    return <></>;
  }
}

export default Logout;
