const instructorWithLongestName = function(instructors) {
  let longestName = "";
  let instructorsCourse = "";
  for (let x = 0; x < instructors.length; x++) {
    if (longestName.length < instructors[x].name.length) {
      longestName = instructors[x].name;
      instructorsCourse = instructors[x].course;
    }
  }
  return "name: \"" + longestName + "\", course: \"" + instructorsCourse + "\"";
};



console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Android"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"},
  {name: "Orcinuscus", course: "Java"},
  {name: "Brittany", course: "Web"}
]));