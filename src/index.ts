let mystery: unknown = "hello"
const numChars = (mystery as string).length;

// console.log(numChars)
// function printD(msg: string) {
//     console.log(msg)
//     console.log(msg)
// }

interface Todo {
    text: string;
    completed: boolean;
}

const input = document.getElementById('todoinput')! as HTMLInputElement;
const form = document.querySelector("#todoform")!
const list = document.getElementById("todolist")

const todos: Todo[] = readTodos()
todos.forEach(createTodoEl)

const btn = document.getElementById("btn")! as HTMLButtonElement
//console.log(btn)

// btn?.addEventListener("click", function() {
//     alert("clicked.")
//     console.log("clicked !")
// })

function readTodos(): Todo[] {
const todosJSON = localStorage.getItem("todos")
if(todosJSON === null) return []
return JSON.parse(todosJSON)
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))

}

//localStorage.getItem("todos")

// btn.addEventListener("click", function() {
//     alert(input.value)
//     // input.value = "";
//     console.log(input.value)
// })

form.addEventListener('submit', handleSubmit)

function handleSubmit(event: SubmitEvent) {
    event.preventDefault()
    const newTodo: Todo = {
        text: input.value,
        completed: false,
    }
    createTodoEl(newTodo)
    todos.push(newTodo)
    saveTodos()
    input.value = "" //clear input field.
}

function createTodoEl(todo: Todo) {
    const newLI = document.createElement("li")
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.checked = todo.completed

    checkbox.addEventListener("change", function() {
        todo.completed = checkbox.checked
        saveTodos()
    })
    newLI.append(checkbox)
    newLI.append(todo.text)
    list.append(newLI)
}