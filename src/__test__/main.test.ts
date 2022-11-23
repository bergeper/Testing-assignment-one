import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

test("Should clear the list of todos", () => {
  // Arrange
  let todos: Todo[] = [];

  let todo = new Todo("Todo", true);

  todos.push(todo);

  console.log(todos);

  // Act
  removeAllTodos(todos);
  console.log(todos);

  // Arrest
  expect(todos.length).toBe(0);
});

describe("Should mark todo true or false", () => {
  test("Should mark a todo true", () => {
    // Arrange
    let todo: Todo = new Todo("Todo", false);
    console.log(todo);
    // Act
    changeTodo(todo);
    console.log(todo);
    // Arrest
    expect(todo.done).toBe(true);
    expect(todo.done).toBe(!false);
  });
  test("Should mark todo false", () => {
    // Arrange
    let todo: Todo = new Todo("Todo", true);
    console.log(todo);
    // Act
    changeTodo(todo);
    console.log(todo);
    // Arrest
    expect(todo.done).toBe(!true);
    expect(todo.done).toBe(false);
  });
});

test("Should add todo to list", () => {
  // Arrange
  // Act
  // Arrest
});
