import React, { Component } from "react";
import { connect } from "react-redux";
import { addOne, getList, changeTab, setSearchCondition } from "./actionCreator";
import "../../App.css";
import FormTab from "./addFormView";
import ListTab from "./itemsListView";
import SearchCondition from "./searchView";

class Contact extends Component {

  render() {
    const { dispatch, items} = this.props;
    dispatch(getList());
    return (
      <div>
        <div>
          <li onClick={() => dispatch(changeTab("TabA"))}>新增</li>
          <li onClick={() => dispatch(changeTab("TabB"))}>联系人列表</li>
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

export default connect(mapStateToProps)(Contact);
