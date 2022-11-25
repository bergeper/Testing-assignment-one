/**
 * @jest-environment jsdom
 */

import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { IAddResponse } from "../ts/models/IAddResponse";
import { Todo } from "../ts/models/Todo";

test("Should clear the list of todos", () => {
  // Arrange
  let todos: Todo[] = [];

  let todo = new Todo("Todo", true);

  todos.push(todo);

  // Act
  removeAllTodos(todos);

  // Arrest
  expect(todos.length).toBe(0);
});

describe("ChangeTodo", () => {
  test("Should mark a todo true", () => {
    // Arrange
    let todo: Todo = new Todo("Todo", false);
    console.log(todo);
    // Act
    changeTodo(todo);
    console.log(todo);
    // Arrest
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
  });
});

describe("AddTodo", () => {
  test("If it works", () => {
    // Arrange
    let todos: Todo[] = [];
    let todoText: string = "HEJSAN";
    let length: number = todos.length;

    // Act
    let result = addTodo(todoText, todos);

    // Only to show for myself in console
    console.log(todos);
    console.log("Ditt resultat blev", result.success);

    // Arrest
    expect(todos.length).toBe(length + 1);
    expect(result.success).toBe(true);
  });

  test("If it doesnt work", () => {
    // Arrange
    let todos: Todo[] = [new Todo("Handla", false)];
    let todoText: string = "HE";

    // Act
    let result: IAddResponse = addTodo(todoText, todos);

    // Only to show for myself in console
    console.log(todos);
    console.log("Ditt resultat blev", result.success);

    // Arrest
    expect(todos.length).toBe(1);
    expect(result.success).toBe(false);
  });
});
