var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//sort by value
students.sort(function(a, b) {
  return a.age - b.age
});

//sort by name & if name is same by decenting/ oldest first
students.sort(function(a, b) {
  let nameA = a.name
  let nameB = b.name

  if(nameA < nameB) {
    return -1;
  } else if(nameA > nameB) {
      return 1;
  } else if (nameA === nameB) {
    return b.age - a.age
  }
});

console.log(students);

