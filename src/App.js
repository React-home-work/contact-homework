import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import { Login, Contact } from "./component";

class App extends Component {
  // componentWillUpdate() {
  //   console.log(this.props, 'app will update');
  // }
  // componentDidUpdate() {
  //   console.log(this.props, 'app did update');
  // }
  //   componentWillMount() {
  //     console.log(this.props, 'app will mount');
  // }
  constructor(props) {
    super(props);
    this.loginAuthenticate = this.loginAuthenticate.bind(this);
    this.loginStatePrompt = this.loginStatePrompt.bind(this);
  }

  loginAuthenticate(routeText) {
    if (this.props.authenticate.loginState !== true) {
      return "/login";
    } else {
      return routeText;
    }
  }
  loginStatePrompt() {
    if (this.props.authenticate.loginState === true) {
      return `${this.props.authenticate.userName} 已登录`;
    } else {
      return "未登录";
    }
  }
  render() {
    return (
      <div id="App" className="App">
        <div id="Container" className="Container">
          <div className="header">
            <div>Contact</div>
            <div>{this.loginStatePrompt()}</div>
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
