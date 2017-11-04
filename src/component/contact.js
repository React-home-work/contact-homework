import React, { Component } from "react";
import { Router, Route, Link } from "react-router";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addOne, getList, changeTab, setSearchCondition } from "../actions";
// import "../App.css";
import FormTab from "./form-tab";
import ListTab from "./list-tab";
import SearchCondition from "./search";
// import { authenticateUser } from "../actions";
import { store } from "../index";

class Contact extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.items, "test contact");
    console.log(this.props.searchCondition, "searchcondition");
  }

  componentWillUpdate() {
    console.log(this.props.searchCondition, "searchcondition111");
  }



  render() {
    const { dispatch, items} = this.props;
    dispatch(getList());
    return (
      <div>
        <div>
          <li onClick={() => dispatch(changeTab("TabA"))}>TabA</li>
          <li onClick={() => dispatch(changeTab("TabB"))}>TabB</li>
        </div>
        <div>
          {this.props.tabState.tabName === "TabA" ? (
            <FormTab
              onAddClick={(name, phone) => dispatch(addOne(name, phone))}
            />
          ) : (
            <div>
              <SearchCondition
                  onSearchClick={condition => dispatch(setSearchCondition(condition))}
              />
              <ListTab items={items} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

const setItemSearchCondition = (items, searchCondition) => {
  if (searchCondition && items.length !== 0) {
    return items.filter(item => {
      console.log(item, "items in setItemSearchCondition")
      if (
        item.name.indexOf(searchCondition) > -1 ||
        item.phone.toString().indexOf(searchCondition) > -1
      ) {
        return item;
      }
    });
  } else {
    return items;
  }
};

const mapStateToProps = state => ({
  items: setItemSearchCondition(state.listOperation, state.searchCondition),
  tabState: state.tabChange,
  searchCondition: state.searchCondition
});

// 待确认：是否这里的state是导入reducer中的时候-->全局的state
// const mapStateToProps = (state) => (state.addOneItem);
// const mapStateToProps = (state) => (state.addOneItem || []);

export default connect(mapStateToProps)(Contact);
