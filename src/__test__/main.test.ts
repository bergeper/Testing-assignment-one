/**
 * @jest-environment jsdom
 */
import { Todo } from "../ts/models/Todo";
import * as mainFN from "./../ts/main";
import * as funcFN from "./../ts/functions";
/*
describe("CreateHTML", () => {
  test("Should store item in localstorage", () => {
    // arrange
    let todos: Todo[] = [
      new Todo("Äta kex", false),
      new Todo("Dricka Kaffe", false),
    ];
    mainFN.createHtml(todos);
    // act
    let todosLS: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
    // assert
    expect(todosLS?.length).toBeGreaterThanOrEqual(2);
  });
  test("Should check if container is empty", () => {
    // arrange
    let todos: Todo[] = [];
    document.body.innerHTML = `
    <ul id="todos" class="todo"></ul>
    `;
    let todosContainer: HTMLUListElement = document.getElementById(
      "todos"
    ) as HTMLUListElement;
    todosContainer.innerHTML = "trolololo";
    // act
    mainFN.createHtml(todos);
    // assert
    expect(todosContainer.innerHTML).toBe("");
  });

  test("Should create HTML for todos", () => {
    // arrange
    let todos: Todo[] = [new Todo("Äta kex", false)];
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let li: HTMLLIElement = document.createElement("li");
    li.innerHTML = todos[0].text;
    // act
    mainFN.createHtml(todos);

    // assert
    expect(document.getElementById("todos")?.innerHTML).toBe(li);
  });
});
*/
describe("DisplayError", () => {
  test("Should add HTML to div", () => {
    //Arrange
    document.body.innerHTML = `<div id="error" class="error"></div>`;
    let error: string = "Error";
    let show: boolean = true;
    //Act
    mainFN.displayError(error, show);
    //Assert
    expect(
      (document.getElementById("error") as HTMLDivElement).classList.length
    ).toBe(2);
  });
  test("Should not add HTML to div", () => {
    document.body.innerHTML = `<div id="error" class="error"></div>`;
    let error: string = "Error";
    let show: boolean = false;

    mainFN.displayError(error, show);

    expect(
      (document.getElementById("error") as HTMLDivElement).classList.length
    ).toBe(1);
  });
});

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

describe("ToggleTodo", () => {
  test("Should call changeTodo", () => {
    // Arrange
    let spy = jest.spyOn(funcFN, "changeTodo").mockReturnValue();

    let todos: Todo = new Todo("sträng", true);
    // Act
    mainFN.toggleTodo(todos);
    // Arrest
    expect(spy).toHaveBeenCalled();
  });
  test("Should call createHtml", () => {
    // Arrange
    let spy = jest.spyOn(mainFN, "createHtml").mockReturnValue();
    let todos: Todo = new Todo("sträng", true);
    // Act
    mainFN.toggleTodo(todos);
    // Arrest
    expect(spy).toHaveBeenCalled();
  });
});

describe("newTodoForm", () => {
  test("Should get input from HTMLFormElement", () => {
    //Arrange
    let spy = jest.spyOn(mainFN, "createNewTodo").mockReturnValue();
    document.body.innerHTML = `
    <form id="newTodoForm">
    <input type="text" id="newTodoText" />
    <button>Skapa</button>
    </form>`;

    mainFN.init();

    //Act
    document.querySelector("button")?.click();

    //Assert
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe("ClearTodo", () => {
  test("Should call removeAllTodos", () => {
    // Arrange
    let spy = jest.spyOn(funcFN, "removeAllTodos").mockReturnValue();

    let todoText: string = "Sträng";
    let done: boolean = false;
    let todos: Todo[] = [new Todo(todoText, done)];

    // Act
    mainFN.clearTodos(todos);

    // Arrest
    expect(spy).toHaveBeenCalled();
  });

  test("Should call createHtml", () => {
    // Arrange
    let spy = jest.spyOn(mainFN, "createHtml").mockReturnValue();
    let todoText: string = "Sträng";
    let done: boolean = false;
    let todos: Todo[] = [new Todo(todoText, done)];

    // Act
    mainFN.clearTodos(todos);

    // Arrest
    expect(spy).toHaveBeenCalled();
  });
});

describe("ClearTodo", () => {
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
