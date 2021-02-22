function todoList(todos) {
  const content = document.querySelector("#content");
  const list = document.createElement("ul");
  content.appendChild(list);
  todos.forEach(item => {
    list.innerHTML += `<li>${item.todo}</li>`  
  });
  const listItem =document.querySelectorAll("li");
  listItem.forEach(list => {
    list.addEventListener("click", () => {
      list.classList.toggle("line-through");
    })
  })
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);