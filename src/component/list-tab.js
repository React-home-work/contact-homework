import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from "react-router";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { addOne } from "../actions";
// import { authenticateUser } from "../actions";
// import { store } from "../index";

class ListTab extends Component {
  constructor(props) {
    super(props);
    // this.items = this.props.items; // 记录 全用this的方式定义仅这个class本身给自己用到的变量，使用const或者let可能会出问题
    this.nextScrollIndex = 5;
    this.state = {
      items: this.props.items.slice(0,6),
    }
    this.onScroll = this.onScroll.bind(this);
  }

  async componentWillReceiveProps(nextProps) {
    this.nextScrollIndex = 5;    
    await this.setState({items: nextProps.items.slice(0,6)}) //异步的
    // console.log("new props", nextProps.items);
    // console.log("new state", this.state.items);
  }

  async onScroll() {
      if(this.props.items.length<7){
        console.log("到底啦~~", this.nextScrollIndex);
        console.log("items.length<7");
        return;
      } 
    let listEl = ReactDOM.findDOMNode(this.ulList);
    if(listEl.scrollTop + listEl.clientHeight === listEl.scrollHeight) {
      console.log("到底啦~~2");
      let i = 0;
      for(i; i<5; i++) {
        ++this.nextScrollIndex;
        if(this.props.items[this.nextScrollIndex]) {
          let nextItem = this.props.items[this.nextScrollIndex];
          await this.setState({items: [...this.state.items, nextItem]});
        } else {
          --this.nextScrollIndex;
          console.log("到底啦啦啦啦啦啦啦啦啦",this.nextScrollIndex);
          break;
        }
      }
    }
  }

  render() {
    return (
      <div>
          <div>TabB</div>
        <ul ref={(ul) => {this.ulList = ul; }} className="item-listing" onScroll={this.onScroll}>
          {this.state.items.length === 0        //这里如果换成this.items就会出现延迟rerender
            ? "hahhaahahahahahh"
            : this.state.items.map((item, index) => {  // 目前认为是rerender不会再执行constructor，所以this.items不变
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


