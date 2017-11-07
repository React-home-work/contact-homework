import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "./component/menu";
import { loginAuthenticate } from "./component/login";
import "./App.css";

class App extends Component {

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
            loginAuthenticate={(routeText) => loginAuthenticate() ? routeText : "/login"}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
