import React, { Component } from "react";
import { Router, Route, Link } from "react-router";
// import { addOne, getList, changeTab } from "../actions";
// import "../App.css";
import { store } from "../index";


class SearchCondition extends Component {
    componentWillMount() {
        console.log(store.getState(), "search will mount");
    }

    componentWillUpadate() {
        console.log(store.getState(), "search will update");
    }

    render() {
        return(
            <div>
                <input type="text" ref="search" />
                <button onClick={() => {
                    this.props.onSearchClick(this.refs.search.value);
                    // this.refs.search.value = "";
                }}>Search</button>
            </div>
        )
    }
}

export default SearchCondition;