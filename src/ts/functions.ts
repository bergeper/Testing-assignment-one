import { IAddResponse } from "./models/IAddResponse";
import { Todo } from "./models/Todo";
//import { createHtml } from "./../ts/main";

export function addTodo(todoText: string, todos: Todo[]): IAddResponse {
  if (todoText.length > 2) {
    let newTodo = new Todo(todoText, false);
    todos.push(newTodo);
    return { success: true, error: "Du måste ange minst två bokstäver" };
  } else {
    return { success: false, error: "Du måste ange minst två bokstäver" };
  }
}

export function changeTodo(todo: Todo) {
  todo.done = !todo.done;
}

export function removeAllTodos(todos: Todo[]) {
  todos.splice(0, todos.length);
}
/*
export function sortTodos(todos: Todo[]) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].done === true) {
      // todos.push(todos.splice(todos.indexOf(todos[i]), 1)[0]);
      createHtml(todos);
    }
  }
}
*/
