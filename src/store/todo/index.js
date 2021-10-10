import { actionHandlers } from "./todo.handlers";
import * as creators from "./todo.creators";
import * as selectors from "./todo.selectors";

const initialState = {
  items: [{ name: "Task #1", isDone: false }],
  error: null,
  query: []
};

export default function reducer(state = initialState, action) {
  const handler = actionHandlers[action.type];

  if (typeof handler === "function") {
    return handler(state, action);
  }

  return state;
}

export { creators, selectors };

