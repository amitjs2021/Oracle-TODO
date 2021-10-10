//izbacili one selektore u zasebni modul ovi već imaju export

export const getItems = (state) => state.items;

export const getError = (state) => state.error;


export const getToDoItems = ({ items, query }) =>
  items.filter((item) => {
    if (query.term && !item.name.includes(query.term)) {
      return false;
    }
    return !item.isDone;
  });

export const getDoneItems = ({ items, query }) =>
  items.filter((item) => {
    if (query.term && !item.name.includes(query.term)) {
      return false;
    }
    return item.isDone;
  });
