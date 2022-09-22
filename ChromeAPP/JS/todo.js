const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function deleteWrite(){
console.log("lalala");
}

function paintTodo(write){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = write;
    const button = document.createElement("button");

    button.innerText = "X";
    button.addEventListener("click", deleteWrite);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}


function handleTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintTodo(newTodo);
}

todoForm.addEventListener("submit", handleTodo);
