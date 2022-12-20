import React, { Component } from "react";
import "../LoginPage/LoginPage.css";
import { auth } from "../firebase";

class SignIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      password: null,
    };
  }

  login = () => {
    auth
      .signInWithEmailAndPassword(this.state.emailId, this.state.password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        localStorage.setItem("users", JSON.stringify(user));
        window.location.reload();
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  render() {
    return (
      <div>
        <input
          className="loginpage__text"
          onChange={(event) => {
            this.setState({
              emailId: event.currentTarget.value,
            });
          }}
          type="text"
          placeholder="Phone number, username, or email"
        />
        <input
          className="loginpage__text"
          onChange={(event) => {
            this.setState({
              password: event.currentTarget.value,
            });
          }}
          type="password"
          placeholder="Password"
        />
        <button className="login__button" onClick={this.login}>
          Sign In
        </button>
      </div>
    );
  }
}

export default SignIN;
