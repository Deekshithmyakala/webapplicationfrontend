import React, { Component } from "react";
import { auth } from "../firebase";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: null,
      name: null,
      userName: null,
      password: null,
    };
  }
  newSignUp = () => {
    auth
      .createUserWithEmailAndPassword(this.state.emailId, this.state.password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;

        let payload = {
          userId: user.uid,
          userName: this.state.userName,
          name: this.state.name,
          profileImage: "",
        };

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        };

        fetch("https://webapplication.herokuapp.com/users", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("users", JSON.stringify(user));
            window.location.reload();
          })
          .catch((error) => {});
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
          placeholder="Mobile number or Email"
        />
        <input
          className="loginpage__text"
          onChange={(event) => {
            this.setState({
              name: event.currentTarget.value,
            });
          }}
          type="text"
          placeholder="Full Name"
        />
        <input
          className="loginpage__text"
          onChange={(event) => {
            this.setState({
              userName: event.currentTarget.value,
            });
          }}
          type="text"
          placeholder="Username"
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
        <button className="login__button" onClick={this.newSignUp}>
          Sign up
        </button>
      </div>
    );
  }
}

export default SignUp;
