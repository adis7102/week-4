function fpb(angka1, angka2) {
  var faktor = [];
  var faktor2 = [];
  var hasil = 0;
  for (var i = 1; i <= angka1; i++) {
    if (angka1 % i === 0) {
      faktor.push(i);
    }
  }
  for (var j = 1; j <= angka2; j++) {
    if (angka2 % j === 0) {
      faktor2.push(j);
    }
  }
  for (var h = 0; h < faktor.length; h++) {
    for (var g = 0; g < faktor2.length; g++) {
      if (faktor2[g] == faktor[h]) {
        hasil = faktor2[g];
      }
    }
  }

  return hasil;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
