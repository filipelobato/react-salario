const formatterCurrency = Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  style: 'currency',
  currency: 'BRL',
});

const formatterNumber = Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
  style: 'currency',
  currency: 'BRL',
});

const formatCurrency = (number) => {
  return formatterCurrency.format(number);
};

const formatNumber = (number) => {
  return formatterNumber.format(number);
};

export { formatCurrency, formatNumber };
