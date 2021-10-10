import React, { useState } from "react";

const initialState = {
  term: ""
};

export function SearchForm({ onSearchSubmit }) {
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

    onSearchSubmit({ term: state.term });
    setState(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="term"
        value={state.name}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}
