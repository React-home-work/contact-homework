import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { LOGIN_SUCCESS } from "./env_variable";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.loginAuthenticate = this.loginAuthenticate.bind(this);
  }

  loginAuthenticate(routeText) {
    if (this.props.authenticate.loginState !== LOGIN_SUCCESS) {
      return "/login";
    } else {
      return routeText;
    }
  }

  render() {
    return (
      <div id="App" className="App">
        <div id="Container" className="Container">
          <div className="header">
            <div>Contact</div>
            <div>{this.props.authenticate.loginState}</div>
          </div>
          <Menu
            menuItem={this.props.children}
            loginAuthenticate={this.loginAuthenticate}
          />
        </div>
      </div>
    );
  }
}

export class Menu extends Component {
  render() {
    return (
      <div className="content">
        <div className="menu-column">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to={this.props.loginAuthenticate("/contact")}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="menu-content">{this.props.menuItem}</div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
