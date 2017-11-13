import React, { Component } from "react";
import { connect } from "react-redux";
import { addOne, setSearchCondition, deleteItem } from "./actionCreator";
import FormTab from "./addFormView";
import ListTab from "./itemsListView";
import SearchCondition from "./searchView";
import "./styles.css";
import Tab from "../tab";
import TabContainer from "../tabContainer";

class Contact extends Component {
  render() {
    return (
      <div>
        <div>
          <TabContainer>
            <Tab header="Form">
              <FormTab
                onAddClick={(name, passWd) => this.props.addOne(name, passWd)}
              />
            </Tab>
            <Tab header="List">
              <div>
                <SearchCondition
                  onSearchClick={condition =>
                    this.props.setSearchCondition(condition)}
                />
                <ListTab
                  items={this.props.items}
                  onDeleteClick={(name, phone) =>
                    this.props.deleteItem(name, phone)}
                />
              </div>
            </Tab>
          </TabContainer>
        </div>
      </div>
    );
  }
}

const setItemSearchCondition = (items, searchCondition) => {
  if (searchCondition && items.length !== 0) {
    return items.filter(
      item =>
        item.name.indexOf(searchCondition) > -1 ||
        item.phone.toString().indexOf(searchCondition) > -1
    );
  } else {
    return items;
  }
};

const mapStateToProps = state => ({
  items: setItemSearchCondition(state.listOperation, state.searchCondition)
});

const mapDispatchToProps = dispatch => {
  return {
    addOne: (name, passWd) => dispatch(addOne(name, passWd)),
    setSearchCondition: condition => dispatch(setSearchCondition(condition)),
    deleteItem: (name, phone) => dispatch(deleteItem(name, phone))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
