import { Todo } from "./models/Todo";

let todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

document.getElementById("clearTodos")?.addEventListener("click", () => {
  clearTodos(todos);
});

// Get new Todo
(document.getElementById("newTodoForm") as HTMLFormElement)?.addEventListener(
  "submit",
  (e: SubmitEvent) => {
    e.preventDefault();

    let todoText: string = (
      document.getElementById("newTodoText") as HTMLInputElement
    ).value;
    console.log("Todos when creating", todos);

    createNewTodo(todoText, todos);
  }
);

// Create new Todo
function createNewTodo(todoText: string, todos: Todo[]) {
  // Om todoText är minst 3 bokstäver så kör createNewTodo
  if (todoText.length > 2) {
    displayError("", false);
    let newTodo = new Todo(todoText, false);
    todos.push(newTodo);

    createHtml(todos);
  } else {
    // ifall man inte skriver något.
    displayError("Du måste skriva in minst tre tecken som uppgift", true);
  }
}

// Create a list with your todos
function createHtml(todos: Todo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));

  let todosContainer: HTMLUListElement = document.getElementById(
    "todos"
  ) as HTMLUListElement;

  todosContainer.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let li: HTMLLIElement = document.createElement("li");

    if (todos[i].done) {
      li.classList.add("todo__text--done");
    }

    li.classList.add("todo__text");
    li.innerHTML = todos[i].text;
    li.addEventListener("click", () => {
      toggleTodo(todos[i]);
    });

    todosContainer.appendChild(li);
  }
}

// Toggle the todo done
function toggleTodo(todo: Todo) {
  todo.done = !todo.done;
  createHtml(todos);
}

// Desplay error?
function displayError(error: string, show: boolean) {
  let errorContainer: HTMLDivElement = document.getElementById(
    "error"
  ) as HTMLDivElement;

  errorContainer.innerHTML = error;

  if (show) {
    errorContainer.classList.add("show");
  } else {
    errorContainer.classList.remove("show");
  }
}

// Remove all todos
function clearTodos(todos: Todo[]) {
  todos.splice(0, todos.length);
  console.log(todos);
  createHtml(todos);
}

// RUN THE program
createHtml(todos);
