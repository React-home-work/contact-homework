import React, {Component} from "react";

export default class TabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {tabName: 0};
    this.changeTab = this.changeTab.bind(this);
    console.log(this.props.children, "tabContainerCildren")
  }

  changeTab(index) {
    this.setState({tabName: index});
  }

  render() {
    return (
      <div>
        {this.props.children.map((tab, index) => {
          return (
            <div key={index}>
              <div onClick={() => this.changeTab(index)}>{tab.props.header}</div>
              {this.state.tabName === index ? <div>{tab}</div> : null}
            </div>
          )
        })}
      </div>
    )
  }
}

