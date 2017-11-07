import React, { Component } from "react";

class FormTab extends Component {

  render() {
    return (
      <div>
        <div>TabA</div>
        <div>
          <input type="text" ref="name" placeholder="Name"/>
          <input type="text" ref="phone" placeholder="Phone"/>
          <button onClick={() => {this.props.onAddClick(this.refs.name.value,
            this.refs.phone.value); this.refs.name.value = '';
            this.refs.phone.value = ''; }}>Submit</button>
        </div>
      </div>
    )
  }
}

export default FormTab;