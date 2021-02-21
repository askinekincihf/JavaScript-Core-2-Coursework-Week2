// Solution - 1 
function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(person => {
    content.innerHTML += `<h1>${person.name}</h1><h2>${person.job}</h2>`;
  })
}

// Solution - 2
// function listOfNames(arrayOfPeople) {
//   let content = document.querySelector("#content");
//   arrayOfPeople.forEach(person => {
//     const h1Tags = document.createElement("h1");
//     const h2Tags = document.createElement("h2");
//     content.append(h1Tags, h2Tags);
//     h1Tags.innerText = person.name;
//     h2Tags.innerText = person.job;
//   })
// }

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);