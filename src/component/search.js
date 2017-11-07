import React, { Component } from "react";
// import "../App.css";


class SearchCondition extends Component {

    render() {
        return(
            <div>
                <input type="text" ref="search" />
                <button onClick={() => {
                    this.props.onSearchClick(this.refs.search.value);
                }}>Search</button>
            </div>
        )
    }
}

export default SearchCondition;