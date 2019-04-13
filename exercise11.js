function shoppingTime(memberId, money) {
  var barang = [];
  var change = money;
  if (memberId === "" || memberId === undefined || money === undefined) {
    return "Mohon Maaf Toko X hanya berlaku untuk member saja";
  }
  if (money < 50000) {
    return "Mohon maaf uang anda tidak cukup";
  }
  if (money >= 1500000) {
    change -= 1500000;
    barang.push("Sepatu Stacattu");
  }
  if (money >= 500000) {
    change -= 500000;
    barang.push("Baju Zoro");
  }
  if (money >= 250000) {
    change -= 250000;
    barang.push("Baju H&N");
  }
  if (money >= 175000) {
    change -= 175000;
    barang.push("Baju Uniklooh");
  }
  if (money >= 50000) {
    change -= 50000;
    barang.push("Casing Handphone");
  }
  var obj = {
    memberId: memberId,
    money: money,
    listPurchased: barang,
    changeMoney: change
  };
  return obj;
}

// TEST CASES
console.log(shoppingTime("1820RzKrnWn08", 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime("82Ku8Ma742", 170000));
//   //{ memberId: '82Ku8Ma742',
//   // money: 170000,
//   // listPurchased:
//   //  [ 'Casing Handphone' ],
//   // changeMoney: 120000 }
   console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
    console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
    console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
