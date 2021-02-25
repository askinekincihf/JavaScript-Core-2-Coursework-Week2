let todos = [
  // { task: "Wash the dishes", completed: false },
  // { task: "Do the shopping", completed: false },
];

// Selectors
let input = document.querySelector("#todoInput");
let addBtn = document.querySelector("button");
let list = document.getElementById("todo-list");

// Functions
function populateTodoList(todos) {
  const changeBtn = document.querySelectorAll(".fa-check");
  const deleteBtn = document.querySelectorAll(".fa-trash");

  changeBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const element = e.currentTarget.parentElement.parentElement;
      element.classList.toggle("line-through") 
    })
  })
  
  deleteBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const element = e.currentTarget.parentElement.parentElement;
      element.remove();
    })
  })

}

function addNewTodo(event) {
  event.preventDefault();

  if(input.value) {
    let obj = {};
    obj.task = input.value;
    obj.completed= false;
    todos.unshift(obj);

    list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">${input.value}
    <span class="badge bg-primary rounded-pill">
    <i id="change-btn" class="fa fa-check" aria-hidden="true"></i>
    <i id="delete-btn" class="fa fa-trash" aria-hidden="true"></i>
    </span></li>`

    input.value = "";
  }  
  populateTodoList(todos);
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
