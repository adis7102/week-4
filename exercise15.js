function highestScore(students) {
  var obj = {};
  var hasil = {};
  if(students.length === 0){
    return {}
  }
  for (var i = 0; i < students.length; i++) {
    if(obj[students[i].class] === undefined) {
      obj[students[i].class] = []
      hasil[students[i].class] = {}
      
    }
    obj[students[i].class].push(students[i])

    var tampung = 0;

    for(var j = 0; j < obj[students[i].class].length; j++){
      if(obj[students[i].class][j].score > tampung){
        tampung = obj[students[i].class][j].score
        hasil[students[i].class].name = obj[students[i].class][j].name
        hasil[students[i].class].score = obj[students[i].class][j].score
      }
    }
  }
  return hasil
}

// TEST CASE
console.log(
  highestScore([
    {
      name: "Dimitri",
      score: 90,
      class: "foxes"
    },
    {
      name: "Alexei",
      score: 85,
      class: "wolves"
    },
    {
      name: "Sergei",
      score: 74,
      class: "foxes"
    },
    {
      name: "Anastasia",
      score: 78,
      class: "wolves"
    }
  ])
);

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }

console.log(
  highestScore([
    {
      name: "Alexander",
      score: 100,
      class: "foxes"
    },
    {
      name: "Alisa",
      score: 76,
      class: "wolves"
    },
    {
      name: "Vladimir",
      score: 92,
      class: "foxes"
    },
    {
      name: "Albert",
      score: 71,
      class: "wolves"
    },
    {
      name: "Viktor",
      score: 80,
      class: "tigers"
    }
  ])
);

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }

console.log(highestScore([])); //{}
