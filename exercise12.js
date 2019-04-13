function countProfit(shoppers) {
  let listBarang = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1]
  ];

  if(shoppers.length === 0){
    return []
}
  var temp1 = [];
  var temp2 = [];
  var temp3 = [];
  var profit1 = 0;
  var profit2 = 0;
  var profit3 = 0;
  var lftOvr1 = listBarang[0][2];
  var lftOvr2 = listBarang[1][2];
  var lftOvr3 = listBarang[2][2];
  
  for (i = 0; i < shoppers.length; i++) {
    if (shoppers[i].product === listBarang[0][0]) {
        if(shoppers[i].amount > lftOvr1){
            continue;
        }
      temp1.push(shoppers[i].name);
      profit1 += listBarang[0][1] * shoppers[i].amount;
      lftOvr1 -= shoppers[i].amount
    } else if (shoppers[i].product === listBarang[1][0]) {
        if(shoppers[i].amount > lftOvr2){
            continue;
        }
      temp2.push(shoppers[i].name);
      profit2 += listBarang[1][1] * shoppers[i].amount;
      lftOvr2 -= shoppers[i].amount
    } else if (shoppers[i].product === listBarang[2][0]) {
        if(shoppers[i].amount > lftOvr3){
            continue;
        }
      temp2.push(shoppers[i].name);
      profit3 += listBarang[2][1] * shoppers[i].amount;
      lftOvr3 -= shoppers[i].amount
    }
  }
  var obj = [
    {
      product: listBarang[0][0],
      shoppers: temp1,
      leftOver: lftOvr1,
      totalProfit: profit1
    },
    {
      product: listBarang[1][0],
      shoppers: temp2,
      leftOver: lftOvr2,
      totalProfit: profit2
    },
    {
      product: listBarang[2][0],
      shoppers: temp3,
      leftOver: lftOvr3,
      totalProfit: profit3
    }
  ];
  return obj;
}

// TEST CASES
console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 2 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 2 }
  ])
);
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

   console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8},
    {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
   {name: 'Rani', product: 'Sweater Uniklooh', amount: 1},
    {name: 'Devi', product: 'Baju Zoro', amount: 1},
    {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
//   // [ { product: 'Sepatu Stacattu',
//   //     shoppers: [ 'Windi' ],
//   //     leftOver: 2,
//   //     totalProfit: 12000000 },
//   //   { product: 'Baju Zoro',
//   //     shoppers: [ 'Devi', 'Lisa' ],
//   //     leftOver: 0,
//   //     totalProfit: 1000000 },
//   //   { product: 'Sweater Uniklooh',
//   //     shoppers: [ 'Rani' ],
//   //     leftOver: 0,
//   //     totalProfit: 175000 } ]
   console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
//   // [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
 console.log(countProfit([])); //[]
