import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SearchForm } from "./components/SearchForm";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { creators, selectors } from "./store/todo";
//tuonda samo importamo oneexportane creators iz index.js tj reducera u nasem slucaju
/**
 * Pokušajte implementirati tražilicu u aplikaciju.
 * 1. Kreirajte SearchForm komponentu.
 * 2. Na submit SearchForm komponente pohranite search
 * term u redux store
 *  a. Definirajte property u initialState
 *  b. Definirajte action type
 *  c. Definirajte action creator
 *  d. Definirajte action handler
 *  e. Dispatchajte akciju pretraživanje u store iz App
 * 3. Napišite selektor koji će search term iz storea
 * koristit kako bi vratio filtrirane iteme ILI koristite
 * search term iz storea pri filtriranju itema iz
 * getDoneItems i getToDoItems selektora.
 */
//kako smo odvojili selektore i creatore moramo prilagoditi ovaj dio koda i reci mu da koirsti ovaj selektor iz selektora koji jeimportan, hence selector.get...
export default function App() {
  const dispatch = useDispatch();
  const doneItems = useSelector(selectors.getDoneItems);
  const toDoItems = useSelector(selectors.getToDoItems);
  const error = useSelector(selectors.getError);

  //ista stvar kao sa selektorima, kako smo importali creatore iz zasebnog modula trebamo reci da koristi createtask iz creatora  putem creators.create...
  const handleCreateTask = (task) => {
    dispatch(creators.createTask(task));
  };

  const handleDeleteTask = (task) => {
    dispatch(creators.deleteTask(task));
  };

  const handleToggleTask = (task) => {
    dispatch(creators.toggleTask(task));
  };
  //znači rukujemo sa searchem tako da dispatchamo akciju koja se zove filtertask i stavit cu taj upit(serch) u tu akciju. Znači svakim submitom searcha mi smo taj upit taj search spremili u store putem ove akcije i sada naši selektori mogu koristit query iz selektora
  const handleSearchSubmit = (query) => {
    dispatch(creators.filterTask(query));
  };

  return (
    <div>
      <h1>My tasks</h1>
      <TaskForm onCreateTask={handleCreateTask} />
      <SearchForm onSearchSubmit={handleSearchSubmit} />
      {error && <div>{error.message}</div>}
      <h2>TO DO</h2>
      <TaskList
        items={toDoItems}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
      <h2>DONE</h2>
      <TaskList
        items={doneItems}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
    </div>
  );
}
