import React, { Component } from 'react';

export default class Salario extends Component {
  handleInputChange = (event) => {
    const newValue = event.target.value;

    this.props.onChangeFilter(newValue);
  };

  render() {
    const { salary } = this.props;
    const { fullSalary } = salary;
    return (
      <div class="row">
        <div class="input-field col s12">
          <input
            autoFocus
            placeholder="1000"
            id="net-salary"
            type="text"
            value={fullSalary}
            onChange={this.handleInputChange}
          />
          <label for="net-salary">Salário bruto</label>
        </div>
      </div>
    );
  }
}
