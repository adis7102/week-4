function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    
    var arr = []

    for(i = 0; i < arrPenumpang.length; i++){
      var obj = {
        penumpang : arrPenumpang[i][0],
        naikDari : arrPenumpang[i][1],
        tujuan : arrPenumpang[i][2],
        bayar : 0
      }
      for(j = 0; j < rute.length; j++){
        if(obj.naikDari === rute[j]){
          var indNaikDari = j
        }
        if(obj.tujuan === rute[j]){
          var tjn = j
        }
        obj.bayar = (tjn - indNaikDari) * 2000
      }
      arr.push(obj)
    }
    
    return arr
    
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]