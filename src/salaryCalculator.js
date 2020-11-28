const aliquotsINSS = [
  { minValue: 0, maxValue: 1045, rate: 0.075, deduction: 0 },
  { minValue: 1045.01, maxValue: 2089.6, rate: 0.09, deduction: 15.67 },
  { minValue: 2089.61, maxValue: 3134.4, rate: 0.12, deduction: 78.36 },
  { minValue: 3134.41, maxValue: 6101.06, rate: 0.14, deduction: 141.05 },
];

const aliquotsIRRF = [
  { minValue: 0, maxValue: 1903.98, rate: 0, deduction: 0 },
  { minValue: 1903.99, maxValue: 2826.65, rate: 0.075, deduction: 142.8 },
  { minValue: 2826.66, maxValue: 3751.05, rate: 0.15, deduction: 354.8 },
  { minValue: 3751.06, maxValue: 4664.68, rate: 0.225, deduction: 636.13 },
  { minValue: 4664.69, maxValue: null, rate: 0.275, deduction: 869.36 },
];

/**
 * Calcula o desconto do INSS com base no salário bruto,
 * antes do desconto do IR.
 * @param {*} fullSalary
 */
const calculateDiscountINSS = (baseINSS) => {
  if (baseINSS > 4664.68) {
    return 713.1;
  }

  const aliquotINSS = aliquotsINSS.find((rate) => {
    return rate.minValue <= baseINSS && baseINSS <= rate.maxValue;
  });
  console.log(aliquotINSS);

  return +(baseINSS * aliquotINSS.rate - aliquotINSS.deduction).toFixed(2);
};

const calculateDiscountIRRF = (salaryPaidINSS) => {
  if (salaryPaidINSS > 6101.07) {
    return +(salaryPaidINSS * 0.275 - 869.36).toFixed(2);
  }

  const aliquotIRRF = aliquotsIRRF.find((rate) => {
    return (
      salaryPaidINSS >= rate.minValue &&
      (salaryPaidINSS <= rate.maxValue || rate.maxValue === null)
    );
  });
  return +(salaryPaidINSS * aliquotIRRF.rate - aliquotIRRF.deduction).toFixed(
    2
  );
};

const calculateSalary = (fullSalary = 0) => {
  console.log(fullSalary);
  const baseINSS = fullSalary;

  const discountINSS = calculateDiscountINSS(baseINSS);
  const salaryPaidINSS = fullSalary - discountINSS;
  // prettier-ignore
  const percentageDiscountINSS = parseFloat((discountINSS / baseINSS).toFixed(2));

  const discountIRRF = calculateDiscountIRRF(salaryPaidINSS);
  const netSalary = +(salaryPaidINSS - discountIRRF).toFixed(2);
  const totalDiscount = discountINSS + discountIRRF;
  // prettier-ignore
  const percentageNetSalary = parseFloat((netSalary / baseINSS).toFixed(2));

  return {
    fullSalary: baseINSS,
    discountINSS,
    salaryPaidINSS,
    discountIRRF,
    totalDiscount,
    netSalary,
    percentageDiscountINSS,
    percentageNetSalary,
  };
};

export { calculateSalary };
