import React, { Component } from "react";
import { Router, Route, Link } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { addOne } from "../actions";
// import { authenticateUser } from "../actions";
// import { store } from "../index";



class FormTab extends Component {
    // componentWillUpdate() {
    // }
    // componentDidUpdate() {
    //   console.log(store.getState());
    // }
  
    render() {
      return (
       <div>
          <div>TabA</div>
        <div>
          <input type="text" ref="name" placeholder="Name"/>
          <input type="text" ref="phone" placeholder="Phone"/>
          <button onClick={() => {this.props.onAddClick(this.refs.name.value,
          this.refs.phone.value); this.refs.name.value = '';
          this.refs.phone.value = ''; }}>Submit</button>
        </div>
       </div>
      )
    }
  }

export default FormTab;