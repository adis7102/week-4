function ubahHuruf(kata) {
    var dict = 'abcdefghijklmnopqrstuvwxyz'
    var temp = []
    var hasil = ''
     for(i = 0; i < kata.length; i++){
         temp.push(dict.indexOf(kata[i]))
     }
     for(j = 0; j < temp.length; j++){
         hasil += dict.charAt(temp[j]+1)
     }
     return hasil
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu