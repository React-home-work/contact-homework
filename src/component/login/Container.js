import React, { Component } from "react";
import { connect } from "react-redux";
import { authenticateUser } from "./actionCreator";
import View from "./View";

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
      <View loginState={this.props.loginState} handleClick={this.handleClick}/>
    );
  }
}

const mapStateToProps = state => ({
  loginState: state.authenticateReducer.loginState
});

export default connect(mapStateToProps)(Login);
