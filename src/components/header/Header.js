import React, { Component } from 'react';

export default class Salario extends Component {
  handleInputChange = (event) => {
    event.target.value = event.target.value.replace('-', '');
    event.target.value = event.target.value.replace('+', '');
    const newValue = event.target.value;
    console.log(`Valor new value => ${newValue}`);

    this.props.onChangeFilter(newValue);
  };

  render() {
    const { salary } = this.props;
    const { fullSalary } = salary;
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            autoFocus
            placeholder="999,99"
            id="net-salary"
            type="number"
            value={fullSalary}
            onChange={this.handleInputChange}
            min="0"
            step="100"
          />
          <label htmlFor="net-salary">Salário bruto</label>
        </div>
      </div>
    );
  }
}
