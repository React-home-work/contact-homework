import React, { Component } from "react";
import "./styles.css";

class FormTab extends Component {

  render() {
    return (
      <div>
        <div className="add-title">Please Add One</div>
        <div className="add-input">
          <div><input type="text" ref="name" placeholder="Name"/></div>
          <div><input type="text" ref="phone" placeholder="Phone"/></div>
          <div><button onClick={() => {this.props.onAddClick(this.refs.name.value,
            this.refs.phone.value); this.refs.name.value = '';
            this.refs.phone.value = ''; }}>Submit</button></div>
        </div>
      </div>
    )
  }
}

export default FormTab;