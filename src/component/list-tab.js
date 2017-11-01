import React, { Component } from "react";
import { Router, Route, Link } from "react-router";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { addOne } from "../actions";
// import { authenticateUser } from "../actions";
// import { store } from "../index";

class ListTab extends Component {
  // constructor(props) {
  //   super(props);
  //   if(this.props.items && this.props.listItem() !== []){
  //     console.log(this.props.items, 'items');
  //     this.name = this.props.items[0].name;
  //   } else {
  //     const name = '1111';
  //   }
  // }
  // componentDidUpdate() {
  //   console.log(this.props.listItem, '11111');
  // }
  render() {
    // console.log(store.getState().listOperate, 'listtabsotre')
    console.log(this.props.items, "items");
    return (
      // <div>
      //   <div>TabB</div>
      //   <div>
      //     {this.props.items.length !== 0
      //       ? this.props.items[0].name
      //       : "hahhaahahahahahh"}
      //       {/* 空对象或者数组互相不等（！= && ！==） */}
      //   </div>
      // </div>
      <div>
          <div>TabB</div>
        <ul id="item-listing">
          {this.props.items.length === 0
            ? "hahhaahahahahahh"
            : this.props.items.map((item, index) => {
                return (
                  <ol key={index}>
                    <li><span>name: {item.name}</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;phone: {item.phone}</span></li>
                  </ol>
                );
              })}
        </ul>
      </div>
    );
  }
}

export default ListTab;
