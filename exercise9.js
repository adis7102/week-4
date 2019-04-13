function checkAB(num) {
  var indA = 0;
  var indB = 0;
  var hasil = 0;

  for(i = 0; i < num.length; i++){
    if(num[i] === 'a'){
      indA = i
    }
    else if(num[i] === 'b'){
      indB = i
    }
  }
  if(indA > indB){
    hasil = indA - indB - 1;
  }
  else if(indB > indA){
    hasil = indB - indA -1;
  }

  if(hasil === 3){
    return true
  }
  else{
    return false
  }
}
 // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false