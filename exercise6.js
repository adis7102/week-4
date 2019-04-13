function digitPerkalianMinimum(angka) {
  var temp = [];
  for (var i = 1; i <= angka; i++) {
    for (var j = 1; j <= angka; j++) {
      if(i * j == angka){
        temp.push(String(i) + j)
      }
    }
  } 
  var temp2 = temp[0].length
  for(var h = 1; h < temp.length; h++){
    if(temp[h].length < temp2) {
      temp2 = temp[h].length
    }
  }
  return temp2
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
