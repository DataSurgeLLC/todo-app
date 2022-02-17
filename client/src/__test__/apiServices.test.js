jest.mock("axios", () => ({
  post: jest.fn(),
  get: jest.fn(),
}));
jest.spyOn(window, "alert").mockImplementation(() => {});

import axios from "axios";
import App from "../App";
import * as react from "react";

import {
  apiUrl,
  getAllTasks,
  addTask,
  updateTask,
  deleleteTask,
} from "../apiServices";

// describe("When getAllTasks api call is passed", () => {
//   test("should return all todo list on success", async () => {
//     //afterEach(jest.clearAllMocks);
//     //given
//     const todos = [
//       { id: 1, name: "Buy eggs", date: "2020-02-09" },
//       { id: 2, name: "Finish a book", date: "2021-02-10" },
//     ];

//     axios.get.mockResolvedValueOnce(todos);

//     //when
//     const results = await getAllTasks();

//     //then
//     expect(axios.get).toHaveBeenCalledWith(apiUrl);
//     expect(results).toEqual(todos);
//   });
// });

// //unit test for get
// describe("When getAllTask api call fails", () => {
//   test("should return empty list ", async () => {
//     //given
//     const message = new Error("return empty list");
//     axios.get.mockResolvedValueOnce(message);
//     axios.get.mockRejectedValueOnce(message);
//     //when
//     const result = await getAllTasks();
//     //then
//     expect(axios.get).toHaveBeenCalledWith(apiUrl);
//     expect(result).toEqual(message);
//   });
// });

// //unit test for post
// describe("When addNewTodo api call passed", () => {
//   test("should add a newTodo to the list ", async () => {
//     //afterEach(jest.clearAllMocks);
//     //given
//     const myMock = jest.fn();

//     const task = { id: 1, name: "Buy eggs", date: "2020-02-09" };
//     const response = task;
//     axios.post.mockResolvedValue(task);

//     //when
//     const result = await addTask(task);
//     console.log(result);
//     //then
//     expect(result).toEqual({ id: 1, name: "Buy eggs", date: "2020-02-09" });
//     expect(axios.post).toHaveBeenCalledWith(apiUrl, task);
//     expect(axios.post).toHaveBeenCalledTimes(1);
//   });

// });

it("marks the todo as completed", () => {
  const startState = [{ id: 1, completed: false, name: "Go to mom house" }];
  const finishedState = updateTask(startState, 1);

  expect(finishedState).toEqual([
    { id: 1, completed: true, name: "Go to mom house" },
  ]);
});

test("deleteTodo deletes the todo it is given", () => {
  const startState = [{ id: 1, completed: false, name: "Buy Milk" }];
  const finState = deleleteTask(startState, 1);
  window.confirm = jest.fn().mockImplementation(() => true)
  expect(finState).toEqual([]);
});

