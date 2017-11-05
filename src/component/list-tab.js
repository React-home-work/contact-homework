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
    // this.listEl = document.createElement("div");
    this.state = {
      items: this.props.items.slice(0,6),
    }
    // console.log(this.props.items, "propssssssitems")
    this.onScroll = this.onScroll.bind(this);
  }
  componentWillUpdate() {
    console.log(this.props.items, 'props.items');
  }
  onScroll() {
      if(this.props.items.length<7){
        console.log("到底啦~~", this.nextScrollIndex);
        console.log("items.length<7");
        return;
      } 
    let listEl = ReactDOM.findDOMNode(this.ulList);
  //   // // console.log(listEl, 'listEl');
    
    if(listEl.scrollTop + listEl.clientHeight === listEl.scrollHeight) {
      console.log("到底啦~~2");
  //     if(this.props.items[this.state.scrollIndex]) {
  //       this.setState = {
  //         scrollIndex: this.state.scrollIndex += 5
  //       }
  //     }
  //     console.log(this.state.scrollIndex, 'scrollIndex after add');
      let i = 0;
      for(i; i<5; i++) {
        ++this.nextScrollIndex
        if(this.props.items[this.nextScrollIndex]) {
          let nextItem = this.props.items[this.nextScrollIndex];
          this.setState({items: [...this.state.items, nextItem]});
    //       console.log("items", this.props.items[this.nextScrollIndex], "exist");
    //       let itemEl = document.createElement("div"); // 个人理解（待验证）:这里直接对dom进行了操作，而不是react本身的虚拟dom
    //       // ReactDOM.render()
    //       itemEl.innerHTML = `<li><span>name: ` + this.props.items[this.nextScrollIndex].name + `</span>
    //       <span>&nbsp;&nbsp;&nbsp;&nbsp;phone: ` + this.props.items[this.nextScrollIndex].phone + `</span></li>`;
    //       listEl.appendChild(itemEl);
        } else {
          --this.nextScrollIndex;
    //       // this.setState = {
    //       // theEnd: ReactDOM.render(<div><span>到底啦！</span></div>),
    //       // }
    //       console.log(this.state.theEnd, 'theEnd');
          console.log("到底啦啦啦啦啦啦啦啦啦",this.nextScrollIndex);
          break;
        }
      }
    }
  }

 //尝试用shouldupdate强制跟新试试

  render() {
    // console.log(store.getState().listOperate, 'listtabsotre')
    console.log(this.props.items, "items");
    return (
      <div>
          <div>TabB</div>
        {/* <ul id="item-listing" className="item-listing" onScroll={this.onScroll}> */}
        {/* <ul ref={(ul) => {this.ulList = ul; }} className="item-listing" onScroll={this.onScroll}> */}
        <ul ref={(ul) => {this.ulList = ul; }} className="item-listing" onScroll={this.onScroll}>

          {this.state.items.length === 0        //这里如果换成this.items就会出现延迟rerender
            ? "hahhaahahahahahh"
            // : this.props.items.slice(0,this.state.scrollIndex).map((item, index) => {  // 目前认为是rerender不会再执行constructor，所以this.items不变
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


