import React, { Component } from 'react';

export default class InputReadOnly extends Component {
  render() {
    const { value, label } = this.props;
    return (
      <div className="input-field col s4">
        <input disabled value={value} type="text" className="validate" />
        <label htmlFor="disabled">{label}</label>
      </div>
    );
  }
}
