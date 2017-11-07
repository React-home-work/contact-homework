import React, { Component } from "react";
import { connect } from "react-redux";
import { authenticateUser } from "./actionCreates";
import {LOGIN_SUCCESS} from "../../env_variable";

class Login extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, passwd) {
    const { dispatch } = this.props;
    dispatch(authenticateUser(name, passwd));
  }

  render() {
    return (
      <div>
        <span>{this.props.loginState}</span>
        { this.props.loginState === LOGIN_SUCCESS ? null :
          <div>
            <input type="text" ref="loginUserName" />
            <input type="text" ref="loginUserPassWd" />
            <button
              onClick={() => {
                this.handleClick(
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
    );
  }
}

const mapStateToProps = state => ({
  loginState: state.authenticate.loginState
});

export default connect(mapStateToProps)(Login);
