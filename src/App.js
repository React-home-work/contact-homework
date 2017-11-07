import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "./component/menu";
import { LOGIN_SUCCESS } from "./env_variable";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.loginAuthenticate = this.loginAuthenticate.bind(this);
  }

  loginAuthenticate(routeText) {
    if (this.props.authenticateReducer.loginState !== LOGIN_SUCCESS) {
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
            <div>{this.props.authenticateReducer.loginState}</div>
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



const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
