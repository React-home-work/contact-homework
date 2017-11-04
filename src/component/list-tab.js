import React, { Component } from "react";
import { Router, Route, Link } from "react-router";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { addOne } from "../actions";
// import { authenticateUser } from "../actions";
// import { store } from "../index";

class ListTab extends Component {
  constructor(props) {
    super(props);
    this.items = this.props.items; // 记录 全用this的方式定义仅这个class本身给自己用到的变量，使用const或者let可能会出问题
    this.nextScrollIndex = 5;
    this.onScroll = this.onScroll.bind(this);
    console.log(this.items,this.items.length, 'itemsssssss');
  }
  // componentDidUpdate() {
  //   console.log(this.props.listItem, '11111');
  // }
  onScroll() {
    let listEl = document.getElementById("item-listing");
    if(listEl.scrollTop + listEl.clientHeight === listEl.scrollHeight) {
      console.log("到底啦~~", this.nextScrollIndex);
      let i = 0;
      for(i; i<5; i++) {
        ++this.nextScrollIndex
        if(this.items[this.nextScrollIndex]) {
          let itemEl = document.createElement("div");
          // itemEl.setAttribute('key', this.nextScrollIndex);
          itemEl.innerHTML = `<li><span>name: ` + this.items[this.nextScrollIndex].name + `</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;phone: ` + this.items[this.nextScrollIndex].phone + `</span></li>`;
          listEl.appendChild(itemEl);
        } else {
          --this.nextScrollIndex;
          console.log("到底啦啦啦啦啦啦啦啦啦",this.nextScrollIndex);
          break;
        }
      }
    }
  }

  render() {
    // console.log(store.getState().listOperate, 'listtabsotre')
    console.log(this.items, "items");
    return (
      <div>
          <div>TabB</div>
        <ul id="item-listing" className="item-listing" onScroll={this.onScroll}>
          {this.items.length === 0
            ? "hahhaahahahahahh"
            : this.items.slice(0,6).map((item, index) => {
                return (
                  <div key={index}>
                    <li><span>name: {item.name}</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;phone: {item.phone}</span></li>
                  </div>
                );
              })}
        </ul>
      </div>
    );
  }
}

export default ListTab;


