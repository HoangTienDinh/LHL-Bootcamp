const organizeInstructors = function (instructors) {
  var organizedList = {}

  for (let i = 0; i < instructors.length; i++) {
    var course = instructors[i].course;
    if (course in organizedList) {
      console.log(course)
      organizedList[course].push(instructors[i].name);
    } else {
      organizedList[course] = [instructors[i].name];
    }
  }
  return organizedList
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));