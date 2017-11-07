import React, { Component } from "react";
import loginAuthenticate from "./loginAuthenticate"

export default class View extends Component {
  render() {
    return(
      <div>
        <span>{this.props.loginState}</span>
        { loginAuthenticate() ? null :
          <div>
            <input type="text" ref="loginUserName" />
            <input type="text" ref="loginUserPassWd" />
            <button
              onClick={() => {
                this.props.handleClick(
                  this.refs.loginUserName.value,
                  this.refs.loginUserPassWd.value
                );
                this.refs.loginUserName.value = "";
                this.refs.loginUserPassWd.value = "";
              }}
            >
              Login
            </button>
          </div>
        }
      </div>
    )
  }
}
