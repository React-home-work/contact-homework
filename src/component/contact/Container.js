import React, { Component } from "react";
import { connect } from "react-redux";
import { addOne, getList, setSearchCondition } from "./actionCreator";
import "../../App.css";
import FormTab from "./addFormView";
import ListTab from "./itemsListView";
import SearchCondition from "./searchView";

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { tabName: "TabA" };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(newTabName) { this.setState({ tabName: newTabName}); }

  render() {
    const { dispatch, items} = this.props;
    dispatch(getList());
    return (
      <div>
        <div>
          <li onClick={() => this.changeTab("TabA")}>新增</li>
          <li onClick={() => this.changeTab("TabB")}>联系人列表</li>
        </div>
        <div>
          {this.state.tabName === "TabA" ? (
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
});

export default connect(mapStateToProps)(Contact);
