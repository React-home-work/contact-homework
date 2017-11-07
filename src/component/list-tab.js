import React, {Component} from "react";
import ReactDOM from "react-dom";
import {NO_ITEM, ITEMS_PER_PAGE } from '../env_variable';


class ListTab extends Component {

  constructor(props) {
    super(props);
    this.pages = Math.ceil(this.props.items.length / ITEMS_PER_PAGE);
    this.currentPageStartNum = 0;
    this.currentPageEndNum = ITEMS_PER_PAGE;
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      items: this.props.items.slice(0, ITEMS_PER_PAGE),
      pages: this.pages,
      isEnd: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.pages = Math.ceil(nextProps.items.length / ITEMS_PER_PAGE);
    this.currentPageStartNum = 0;
    this.currentPageEndNum = ITEMS_PER_PAGE;
    this.setState({
      items: nextProps.items.slice(0, ITEMS_PER_PAGE),
      pages: this.pages,
      isEnd: false
    })
  }

  onScroll() {
    //当从有scroll变为无scroll的时候会触发onScroll，且判定为滑到底了。所以多页变成一页时会onScroll
    if (this.props.items.length < ITEMS_PER_PAGE) {
      return null;
    } //确保多到一时不触发onScroll内容执行
    let listEl = ReactDOM.findDOMNode(this.ulList);
    if (listEl.scrollTop + listEl.clientHeight === listEl.scrollHeight) {
      --this.pages;
      if (this.pages > 0) {
        this.currentPageStartNum += ITEMS_PER_PAGE;
        this.currentPageEndNum += ITEMS_PER_PAGE;
        this.setState({
          items: [
            ...this.state.items,
            ...this.props.items.slice(this.currentPageStartNum, this.currentPageEndNum)
          ]
        })
      } else if (this.pages === 0) {
        this.setState({isEnd: true});
      } else {
        return null;
      }
    }
  }

  render() {
    return (
      <div>
        <div>TabB</div>
        <ul ref={(ul) => {
          this.ulList = ul;
        }} className="item-listing" onScroll={this.onScroll}>
          {this.state.items.length === 0
            ? NO_ITEM
            : this.state.items.map((item, index) => {
              return (
                <li key={index}><span>name: {item.name}</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;phone: {item.phone}</span></li>
              );
            })}
          {this.state.isEnd ? <li><span>到底啦</span></li> : null}
        </ul>
      </div>
    );
  }
}

export default ListTab;


