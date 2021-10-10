import { createStore } from "redux";

import todoReducer from "./todo";

export const store = createStore(todoReducer);
