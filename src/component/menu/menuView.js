import React, { Component } from "react";
import { Link } from "react-router";
import "./styles.css";

export default class Menu extends Component {
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