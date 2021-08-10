const persons = [
  { name: "John Doe", salary: 9500 },
  { name: "Jane Doe", salary: 16500 },
  { name: "Jim Doe", salary: 24500 },
  { name: "Josh Doe", salary: 45000 },
];

const taxSlabs = [
  { gt: 0, lte: 10000, tax: 2 },
  { gt: 10000, lte: 20000, tax: 4 },
  { gt: 20000, lte: 30000, tax: 7 },
  { gt: 30000, lte: 40000, tax: 10 },
  { gt: 40000, lte: 999999, tax: 12 }
];

const netTax = (salary) => {
  let remainderGrossSalary = salary;
  let totalTaxAmount = 0;
  taxSlabs.forEach((slab) => {
    const range = slab.lte - slab.gt;
    let taxableAmount = 0;
    let taxAmount = 0;

    if (remainderGrossSalary <= range) {
      taxableAmount = remainderGrossSalary;
      remainderGrossSalary = 0;
    } else {
      taxableAmount = range;
      remainderGrossSalary = remainderGrossSalary - range;
    }

    taxAmount = taxableAmount * (slab.tax / 100);
    totalTaxAmount += taxAmount;
  });

  return Math.ceil(totalTaxAmount);
};

persons.map((m) => {
  console.log(`${m.name} salary is  ${m.salary - netTax(m.salary)}`);
});
