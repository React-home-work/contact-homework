import React, { Component } from "react";
import { Router, Route, Link } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addOne, getList, changeTab } from "../actions";
// import "../App.css";
import FormTab from "./form-tab";
import ListTab from "./list-tab";
// import { authenticateUser } from "../actions";
import { store } from "../index";

class Contact extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.items, "test contact");
  }
  render() {
    const { dispatch } = this.props;
    dispatch(getList());
    return (
      <div>
        <div>
          <li onClick={() => dispatch(changeTab("TabA"))}>TabA</li>
          <li onClick={() => dispatch(changeTab("TabB"))}>TabB</li>
        </div>
        <div>
          {
            this.props.tabState.tabName === "TabA" 
            ? <FormTab onAddClick={(name, phone) => dispatch(addOne(name, phone))} />
            :        <ListTab items={this.props.items} />
          }
      </div>
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
  items: state.listOperation,
  tabState: state.tabChange
});

// 待确认：是否这里的state是导入reducer中的时候-->全局的state
// const mapStateToProps = (state) => (state.addOneItem);
// const mapStateToProps = (state) => (state.addOneItem || []);

export default connect(mapStateToProps)(Contact);
