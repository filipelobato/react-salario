import React, { Component } from 'react';

import Header from './components/header/Header';
import InputReadOnly from './components/InputReadOnly/InputReadOnly';
import { calculateSalary } from './salaryCalculator';
import { formatNumber } from './components/helpers/formatter';

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
    console.log(newValue);
    const {
      discountINSS,
      discountIRRF,
      totalDiscount,
      netSalary,
    } = calculateSalary(newValue);

    this.setState({ discountINSS, discountIRRF, totalDiscount, netSalary });
    console.log(this.state);
  };

  render() {
    const {
      fullSalary,
      discountINSS,
      discountIRRF,
      totalDiscount,
      netSalary,
    } = this.state;

    return (
      <div className="container">
        <h1 style={styles.centeredTitle}>Salário líquido</h1>
        <Header salary={fullSalary} onChangeFilter={this.handleChangeFilter} />
        <div className="row">
          <InputReadOnly
            value={formatNumber(discountINSS)}
            label={'Desconto INSS'}
          />
          <InputReadOnly
            value={formatNumber(discountIRRF)}
            label={'Desconto IRRF'}
          />
          <InputReadOnly
            value={formatNumber(netSalary)}
            label={'Salário líquido'}
          />
          <InputReadOnly
            value={formatNumber(totalDiscount)}
            label={'Total desconto'}
          />
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
