const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function compare(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  let comparison = 0
  if (nameA > nameB) {
    comparison = 1
  } else if (nameA < nameB) {
    comparison = -1;
  } else if (nameA === nameB) {
    let ageComparison = 0
    if(a.age > b.age) {
      ageComparison = -1
    } else if (a.age < b.age) {
      ageComparison = 1;
    } 
    return ageComparison
  }
  return comparison;
}

console.log(students.sort(compare))