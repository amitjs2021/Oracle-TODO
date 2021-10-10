import React from "react";

export function TaskList({
  items,
  onDeleteTask,
  onToggleTask
}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => onToggleTask(item)}
          />
          {item.name}
          <button onClick={() => onDeleteTask(item)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
