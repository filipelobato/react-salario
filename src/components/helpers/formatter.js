const formatterNumber = Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
});

const formatNumber = (number) => {
  return formatterNumber.format(number);
};

export { formatNumber };
