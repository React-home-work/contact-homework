import React, { Component } from "react";
import { Router, Route, Link } from "react-router";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { authenticateUser } from "../actions";
import { store } from "../index";

class Login extends Component {
    // componentWillMount() {
    //     console.log(this.props, 'Login props');
    // }
    // componentDidUpdate() {
    //   console.log(store.getState(), 'login did update');
    // }
    constructor(props) {
      super(props);
    //   const {dispatch} = this.props; //? 感觉有问题，待定
      this.handleClick = this.handleClick.bind(this);    
    }
    handleClick(name, passwd) {
        // console.log(this.props.dispatch === store.dispatch, 'sdfjslfjds');
        // console.log(this.props, 'this.props befroe');
    // console.log(this.props.loginState,'1233333');
    // this.props.authenticateUser(name, passwd);
    const { dispatch } = this.props;
    // console.log(store.getState(), 'store1')
        // store.dispatch(authenticateUser(name, passwd));
    dispatch(authenticateUser(name, passwd));
    // console.log(store.getState(), 'store2')

    // console.log(this.props, 'this.props after');
    
    //   this.props.dispatch(authenticateUser(name, passwd));
    //   store.dispatch(authenticateUser(name, passwd));
      
    //   console.log(this.props.loginState, '12121212');
    //   console.log(name, passwd);
      // if(!store.getState().authenticate.loginState) {
      if(!this.props.loginInfo.loginState) {
            
        alert('login error');
      } else {
        alert('login success');
      }
    }
    render() {
      return (
        <div>
          <div>
            <input type="text" ref='loginUserName' />
            <input type="text" ref='loginUserPassWd'/>
            <button onClick={() => {this.handleClick(this.refs.loginUserName.value,
                this.refs.loginUserPassWd.value); this.refs.loginUserName.value = '';
                this.refs.loginUserPassWd.value = ''}}>Login</button>
          </div>
        </div>
      );
    }
  }
  
  // const mapStateToProps = (state) => (state.authenticate);
  
  const mapStateToProps = (state) => ({
    loginInfo: state.authenticate
  });


//   const mapDispatchToProps = (dispatch) => {
//     return { actions: bindActionCreators(authenticateUser, dispatch) };
//   }
export default connect(mapStateToProps)(Login);
// export default connect(mapStateToProps, null, null, {pure: false})(Login);

  