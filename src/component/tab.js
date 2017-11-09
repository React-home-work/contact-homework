import React, {Component} from "react";

export default class Tab extends Component {
  render() {
    console.log(this.props.children, "tab Children");
    return (
        <div>{this.props.children}</div>
    )
  }
}
