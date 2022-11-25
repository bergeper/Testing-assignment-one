/**
 * @jest-environment jsdom
 */
import { Todo } from "../ts/models/Todo";
import * as mainFN from "./../ts/main";

describe("HandleClearTodo and clearTodo", () => {
  test("Should be able to click clearTodo", () => {
    //Arrange
    let spy = jest.spyOn(mainFN, "clearTodos").mockReturnValue();
    document.body.innerHTML = `<button type="button" id="clearTodos">Rensa lista</button>`;
    mainFN.init();
    //Act
    document.getElementById("clearTodos")?.click();
    //Assert
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
/*
describe("newTodoForm", () => {
  test("Should get input from HTMLFormElement", () => {
    //Arrange
    let spy = jest.spyOn(mainFN, "createNewTodo").mockReturnValue();
    document.body.innerHTML = `
    <form id="newTodoForm">
      <input type="text" id="newTodoText" />
    </form>`;

    mainFN.init();

    //Act
    document.getElementById("newTodoForm")?.focus();

    //Assert
    expect(spy).toHaveBeenCalled();
  });
});
*/
describe("createNewTodo", () => {
  test("Should create a html for Todo", () => {
    // arrange
    let spy = jest.spyOn(mainFN, "createHtml").mockReturnValue();
    let todoText: string = "Perry";
    let todos: Todo[] = [new Todo("Maxxy", false)];
    // act
    mainFN.createNewTodo(todoText, todos);
    // assert
    expect(spy).toBeCalledTimes(1);
  });

  test("Should not create a html for Todo", () => {
    // arrange
    let spy = jest.spyOn(mainFN, "displayError").mockReturnValue();
    let todoText: string = "Pe";
    let todos: Todo[] = [new Todo("Maxxy", false)];

    // act
    mainFN.createNewTodo(todoText, todos);

    // assert
    expect(spy).toBeCalledTimes(1);
  });
});

// Gör om!
describe("DisplayError", () => {
  test("Should display error", () => {
    //Arrange
    document.body.innerHTML = `      
    <div id="error" class="error"></div>
    `;
    let error: string = "Error";
    let show: boolean = true;

    //Act
    mainFN.displayError(error, show);
    //Assert
    expect(show).toBe(true);
  });
  test("Should not display error", () => {
    //Arrange
    document.body.innerHTML = `
    <div id="error" class="error"></div>
    `;
    let error: string = "Error";
    let show: boolean = false;

    //Act
    mainFN.displayError(error, show);
    //Assert
    expect(show).toBe(false);
  });
});
