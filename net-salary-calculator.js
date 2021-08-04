const salaryArray = [
  { name: "John Doe", salary: 9500 },
  { name: "Jane Doe", salary: 16500 },
  { name: "Jim Doe", salary: 24500 },
  { name: "Josh Doe", salary: 37000 },
];

const printOutput = (name, salary) => {
  console.log(`${name} salary is ${salary}`);
};


salaryArray.forEach(({ name, salary }) => {
  const twoPercentTax = (2 * 10000) / 100;
  const fourPercentTax = (4 * 10000) / 100;
  const sevenPercentTax = (7 * 10000) / 100;

  if (salary > 0 && salary <= 10000) {
    const netSalary = salary - (2 * salary) / 100;     //Net salary of John Doe
    printOutput(name, netSalary);                   
  } 
  
  else if (salary > 10000 && salary <= 20000)
   {
    const taxOnRemainingSalaryAfterTenThousand = (4 * (salary - 10000)) / 100;
  
    //Total tax if salary is > 10000 or <= 20000

    const totalTax =
      twoPercentTax + taxOnRemainingSalaryAfterTenThousand;
    const netSalary = salary - totalTax;                           //Net salary of Jane Doe
    printOutput(name, netSalary);
  } 
  else if (salary > 20000 && salary <= 30000) 
  {
    const taxOnRemainingSalaryAfterTwentyThousand =
      (7 * (salary - 20000)) / 100;
   
   //Total tax if salary is > 20000 or <= 30000
      const totalTax =
      twoPercentTax +
      fourPercentTax +
      taxOnRemainingSalaryAfterTwentyThousand;
    const netSalary = salary - totalTax;                     //Net salary of Jim Doe
    printOutput(name, netSalary);
  }
   else if (salary > 30000) 
   {
    const taxOnRemainingSalaryAfterThrityThousand =
      (10 * (salary - 30000)) / 100;

      //Total tax if salary is >30000
      const totalTax =
      twoPercentTax +
      fourPercentTax +
      sevenPercentTax +
      taxOnRemainingSalaryAfterThrityThousand;
    const netSalary = salary - totalTax;                        //Net salary of John Doe
    printOutput(name, netSalary);
  }
});
