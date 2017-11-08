import React, { Component } from "react";
import { Link } from "react-router";
import "./styles.css";

export default class Menu extends Component {
  render() {
    return (
      <div className="content">
        <div className="menu-column">
            <div><Link to="/login">Login</Link></div>
            <div><Link to="/contact">Contact</Link></div>
        </div>
        <div className="menu-content">{this.props.menuItem}</div>
      </div>
    );
  }
}