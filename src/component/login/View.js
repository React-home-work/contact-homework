import React, { Component } from "react";
import { connect } from "react-redux";
import { authenticateUser } from "./actionCreator";
import {LOGIN_SUCCESS} from "../../env_variable";

export default class View extends Component {
  render() {
    return(
      <div>
        <span>{this.props.loginState}</span>
        { this.props.loginState === LOGIN_SUCCESS ? null :
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
