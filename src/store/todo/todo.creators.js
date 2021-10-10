

import { type } from "./todo.actions";

export const createTask = (task) => ({
  type: type.CREATE_TASK,
  task
});

export const deleteTask = (task) => ({
  type: type.DELETE_TASK,
  task
});

export const toggleTask = (task) => ({
  type: type.TOGGLE_TASK,
  task
});

export const filterTask = (query) => ({
  type: type.FILTER_TASK,
  query
});
