import React, { Component } from 'react';

import Header from './components/header/Header';
import InputReadOnly from './components/InputReadOnly/InputReadOnly';
import { calculateSalary } from './salaryCalculator';

const COLOR_INSS = '#e67e22';
const COLOR_IRPF = '#c0392b';
const COLOR_NET_SALARY = '#16a085';
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 0,
      discountINSS: 0,
      salaryPaidINSS: 0,
      discountIRPF: 0,
      totalDiscount: 0,
      netSalary: 0,
      percentageDiscountINSS: 0,
      percentageNetSalary: 0,
      percentagediscountIRPF: 0,
      baseINSS: 0,
      baseIRPF: 0,
    };
  }

  handleChangeFilter = (newValue) => {
    this.setState({
      fullSalary: newValue,
    });

    const {
      discountINSS,
      discountIRPF,
      totalDiscount,
      netSalary,
      percentageDiscountINSS,
      percentagediscountIRPF,
      baseIRPF,
      baseINSS,
    } = calculateSalary(newValue);

    this.setState({
      discountINSS,
      discountIRPF,
      totalDiscount,
      netSalary,
      percentageDiscountINSS,
      percentagediscountIRPF,
      baseIRPF,
      baseINSS,
    });
  };

  render() {
    const { fullSalary, totalDiscount, netSalary } = this.state;
    const { discountINSS, baseIRPF, baseINSS, discountIRPF } = this.state;
    const { percentageDiscountINSS, percentagediscountIRPF } = this.state;

    return (
      <div className="container">
        <h1 style={styles.centeredTitle}>Salário líquido</h1>
        <Header salary={fullSalary} onChangeFilter={this.handleChangeFilter} />

        <div className="row">
          <InputReadOnly value={baseINSS} label={'Base INSS'} />
          <InputReadOnly
            value={discountINSS}
            label={'Desconto INSS'}
            color={COLOR_INSS}
            percentage={percentageDiscountINSS}
          />
          <InputReadOnly value={baseIRPF} label={'Base IRPF'} />
          <InputReadOnly
            value={discountIRPF}
            label={'Desconto IRRF'}
            percentage={percentagediscountIRPF}
            color={COLOR_IRPF}
          />
          <InputReadOnly
            value={totalDiscount}
            label={'Total descontado'}
            color={COLOR_IRPF}
          />
          <InputReadOnly
            value={netSalary}
            label={'Salário líquido'}
            color={COLOR_NET_SALARY}
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
