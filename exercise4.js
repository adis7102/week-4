function cariModus(arr) {
    var temp = []
    var firstMod = 0
    for(i = 0; i < arr.length; i++){
        for(j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                temp.push(arr[j]) 
            }
        }
    }
    for(h = 0; h < temp.length; h++){
        for(k = h+1; k < temp.length; k++){
            if(temp[h] === temp[k]){
                return -1
            }
        }
    }
    firstMod = temp[0]
    if(firstMod === undefined){
        return -1
    }
    return firstMod
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1