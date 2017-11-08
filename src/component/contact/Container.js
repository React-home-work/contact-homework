import React, { Component } from "react";
import { connect } from "react-redux";
import { addOne, getList, setSearchCondition } from "./actionCreator";
import FormTab from "./addFormView";
import ListTab from "./itemsListView";
import SearchCondition from "./searchView";
import "./styles.css";

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
        <div className="tab">
          <div onClick={() => this.changeTab("TabA")}>ADD</div>
          <div onClick={() => this.changeTab("TabB")}>LIST</div>
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
