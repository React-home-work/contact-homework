import React, { Component } from "react";
import { Router, Route, Link } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addOne, getList } from "../actions";
import FormTab from "./form-tab";
import ListTab from "./list-tab";
// import { authenticateUser } from "../actions";
import { store } from "../index";

class Contact extends Component {
  constructor(props) {
    super(props);
    // const { dispatch } = this.props;

    console.log(this.props.items, "test contact");
  }
  render() {
    const { dispatch } = this.props;
    dispatch(getList());
    // console.log(this.props, '2222');
    return (
      <div>
        <FormTab onAddClick={(name, phone) => dispatch(addOne(name, phone))} />
        {/*  <ListTab listItem={this.props.listOperate}></ListTab>  */}
        <ListTab items={this.props.items} />
      </div>
    );
  }
}


// const mapStateToProps = (state) => {
//   console.log(state, "========");
//   return {
//     items: state.listOperate
//   }
// };

const mapStateToProps = state => ({
  items: state.listOperate
});

// 待确认：是否这里的state是导入reducer中的时候特指的那一部分的state///-->全局的state
// const mapStateToProps = (state) => (state.addOneItem);
// const mapStateToProps = (state) => (state.addOneItem || []);

export default connect(mapStateToProps)(Contact);
