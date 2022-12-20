import React, { Component } from "react";
import "./NavBar.css";
import Grid from "@material-ui/core/Grid";
import logo from "../../images/logo.png";
import home from "../../images/logout.svg";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="navbar__barContent">
          <Grid container>
            <Grid item xs={2}>
              {" "}
            </Grid>
            <Grid item xs={3}>
              <img
                className="navbar_logo"
                width="105px"
                alt="navbar logo"
                src={logo}
                style={{
                  height: "40px",
                  width: "80px",
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <input
                text="text"
                className="navbar__searchBar"
                placeholder="Search"
              />
            </Grid>
            <div
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
                onClick={() => {
                  window.location.replace("/logout");
                }}
              >
                <span>Logout</span>
                <img
                  className="navbar__img"
                  src={home}
                  width="25px"
                  alt="nav home"
                />
              </div>
            </div>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default NavBar;
