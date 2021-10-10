import React, { useState } from "react";

const initialState = {
  name: ""
};

export function TaskForm({ onCreateTask }) {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    setState((state) => ({
      ...state,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onCreateTask({ name: state.name, isDone: false });
    setState(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
