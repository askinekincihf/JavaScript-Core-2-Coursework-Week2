// Solution - 1
function shoppingList(arrayOfShopping) {
  const content = document.querySelector("div");
  const unOrderedList = document.createElement("ul");
  content.appendChild(unOrderedList);
  arrayOfShopping.forEach(item => unOrderedList.innerHTML += `<li>${item}</li>` );
}

// Solution - 2
// function shoppingList(arrayOfShopping) {
//   const content = document.querySelector("div");
//   const unOrderedList = document.createElement("ul");
//   content.appendChild(unOrderedList);
//   arrayOfShopping.forEach((element) => {
//     let list = document.createElement("li");
//     list.innerText = element;
//     unOrderedList.appendChild(list);
//   })
// }

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);