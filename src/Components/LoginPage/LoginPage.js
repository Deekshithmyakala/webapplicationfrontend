import React, { Component } from "react";
import "./LoginPage.css";
import Grid from "@material-ui/core/Grid";
import fb from "../../images/upload.png";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import logo from "../../images/logo.png";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  changeLogin = () => {
    if (this.state.isLogin) this.setState({ isLogin: false });
    else this.setState({ isLogin: true });
  };

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <div className="loginpage__main">
              <div>
                <div className="loginpage_rightcomponent">
                  <img className="loginpage__logo" alt="W" src={logo} />
                  <div className="loginPage__signin">
                    {this.state.isLogin ? <SignIn /> : <SignUp />}

                    <div className="login__ordiv">
                      <div className="login__dividor"></div>
                      <div className="login__or">OR</div>
                      <div className="login__dividor"></div>
                    </div>

                    <div className="login__fb btn">
                      <img
                        src={fb}
                        width="15px"
                        style={{ marginRight: "5px" }}
                        alt="sso-icon"
                      />
                      Sign In with SSO
                    </div>
                  </div>
                </div>

                <div className="loginpage__signupoption">
                  {this.state.isLogin ? (
                    <div className="loginPage__signin">
                      Don't have an account?{" "}
                      <span
                        className="btn"
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#50c0a4" }}
                      >
                        Sign up
                      </span>
                    </div>
                  ) : (
                    <div className="loginPage__signup">
                      Have an account?{" "}
                      <span
                        className="btn"
                        onClick={this.changeLogin}
                        style={{ fontWeight: "bold", color: "#50c0a4" }}
                      >
                        Sign in
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
