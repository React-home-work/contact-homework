import React, { Component } from "react";
import "./styles.css";

class SearchCondition extends Component {

  render() {
    return(
      <div className="search">
        <input type="text" ref="search" />
        <button onClick={() => {
          this.props.onSearchClick(this.refs.search.value);
        }}>Search</button>
      </div>
    )
  }
}

export default SearchCondition;