var todoList = document.getElementById("todo-list");
function addTodoItem(item) {
  var li = document.createElement("li");
  li.innerHTML = item;
  todoList.appendChild(li);
}
function toggleTodoItem(li) {
  if (li.classList.contains("completed")) {
    li.classList.remove("completed");
  } else {
    li.classList.add("completed");
  }
}