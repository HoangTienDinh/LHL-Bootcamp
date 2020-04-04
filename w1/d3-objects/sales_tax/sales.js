const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateSalesTax = function(salesData, taxRates) {
  const results = {};

  for (let data of salesData) {
    let sum = data.sales.reduce((a, b) => a +b)
    let tax = sum * taxRates[data.province]

    if (data["name"] in results) {
      results[data["name"]]["totalSales"] += sum
      results[data["name"]]["totalTaxes"] += tax
      } else {
      results[data["name"]] = {
        totalSales: sum,
        totalTaxes: tax
      }
    }
  }
  return results;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));