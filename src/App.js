import React, { Component } from 'react';

import Header from './components/header/Header';
import InputReadOnly from './components/InputReadOnly/InputReadOnly';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 0,
      discountINSS: 0,
      salaryPaidINSS: 0,
      discountIRRF: 0,
      totalDiscount: 0,
      netSalary: 0,
      percentageDiscountINSS: 0,
      percentageNetSalary: 0,
    };
  }

  handleChangeFilter = (newValue) => {
    this.setState({
      fullSalary: newValue,
    });
  };

  render() {
    const { fullSalary } = this.state;

    return (
      <div className="container">
        <h1 style={styles.centeredTitle}>Salário líquido</h1>
        <Header salary={fullSalary} onChangeFilter={this.handleChangeFilter} />
        <div class="row">
          <InputReadOnly />
          <InputReadOnly />
          <InputReadOnly />
          <InputReadOnly />
        </div>
      </div>
    );
  }
}

const styles = {
  centeredTitle: {
    textAlign: 'center',
  },
};
