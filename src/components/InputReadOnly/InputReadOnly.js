import React, { Component } from 'react';
import { formatNumber, formatPercentage } from './../helpers/formatter';

export default class InputReadOnly extends Component {
  render() {
    const { color, value, label, percentage = 0 } = this.props;
    const formattedLabel =
      percentage > 0 ? `${label} ${formatPercentage(percentage)}` : `${label}`;

    return (
      <div className="input-field col s12 l6">
        <input
          disabled
          value={formatNumber(value)}
          type="text"
          className="validate"
          style={{ color, fontWeight: 'bold' }}
        />
        <label htmlFor="disabled">{formattedLabel}</label>
      </div>
    );
  }
}
