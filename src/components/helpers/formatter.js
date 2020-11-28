const formatterCurrency = Intl.NumberFormat('pt-BR', {
  maximumFractionDigits: 2,
  style: 'currency',
  currency: 'BRL',
});

const formatterNumber = Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
});

const formatCurrency = (number) => {
  return formatterCurrency.format(number);
};

const formatNumber = (number) => {
  return formatterNumber.format(number);
};

const formatPercentage = (number) => {
  const numberInPercentage = +(number * 100).toFixed(2);
  return `${numberInPercentage}%`;
};

export { formatCurrency, formatNumber, formatPercentage };
