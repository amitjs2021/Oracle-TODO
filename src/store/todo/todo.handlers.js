
import { type } from "./todo.actions";

function handleCreateTask(state, action) {
  const newState = { ...state, error: null };

  if (newState.items.find((item) => item.name === action.task.name)) {
    newState.error = {
      message: "Oh no! This task already exists!"
    };
  } else {
    newState.items = [...newState.items, action.task];
  }

  return newState;
}

function handleDeleteTask(state, action) {
  return {
    ...state,
    items: state.items.filter((item) => item.name !== action.task.name)
  };
}

function handleToggleTask(state, action) {
  const newState = { ...state };

  newState.items = newState.items.map((item) => {
    if (item.name !== action.task.name) {
      return item;
    }

    return {
      ...item,
      isDone: !item.isDone
    };
  });

  return newState;
}
//handler rukuje akcijom i zapravo samo update query u inicijalnom stateu (u reduceru)
function handleFilterTask(state, action) {
  return {
    ...state,
    query: action.query
  };
}
//objekt za rukovanje akcijama i kazemo mu da za svaki od ovih tipova akcija  će postojati neka funkcija koja rukuje s tom funkcijom. Nastavak na to je u reduceru.Pripazi neki te funkcije umjesto dai h pisu odvojeno stave direkto tu dolje u ovo. znaci ne napisu samo handle nes nego cijelu funkciju kao definiranu gore
//ovo jako dobro dode  ako imamo tonu action handlera i umjesto samo onog typeof u reduceru imamo tonu switch i case. A mi možemo ovo sve izdvojiti u zasebni modul kao ovdje i samo ga importati u reducer. Zahvaljujući tome reducer je puno čišći
export const actionHandlers = {
  [type.CREATE_TASK]: handleCreateTask,
  [type.DELETE_TASK]: handleDeleteTask,
  [type.TOGGLE_TASK]: handleToggleTask,
  [type.FILTER_TASK]: handleFilterTask
};
