import React from 'react';

export default function Tasks({ todo, handleClick }) {
  return (
    <div>
      {/* <p>{task}</p> */}
      <br></br>
      {todo.task}
      <br></br>
      <input
        checked={todo.is_complete}
        type="checkbox"
        onChange={() => handleClick(todo)}
        value={todo}
      />
    </div>
  );
}
