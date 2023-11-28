let mystery = "hello";
const numChars = mystery.length;
const input = document.getElementById('todoinput');
const form = document.querySelector("#todoform");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodoEl);
const btn = document.getElementById("btn");
//console.log(btn)
// btn?.addEventListener("click", function() {
//     alert("clicked.")
//     console.log("clicked !")
// })
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
//localStorage.getItem("todos")
// btn.addEventListener("click", function() {
//     alert(input.value)
//     // input.value = "";
//     console.log(input.value)
// })
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodoEl(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = ""; //clear input field.
}
function createTodoEl(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(checkbox);
    newLI.append(todo.text);
    list.append(newLI);
}
