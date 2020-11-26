import React, { Component } from 'react';

export default class InputReadOnly extends Component {
  render() {
    const { value } = this.props;
    return (
      <div class="input-field col s4">
        <input
          disabled
          value={value}
          id="disabled"
          type="text"
          class="validate"
        />
        <label for="disabled">Disabled</label>
      </div>
    );
  }
}
