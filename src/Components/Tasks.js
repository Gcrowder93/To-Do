import React from 'react';

export default function Tasks({ todo, handleClick }) {
  return (
    <div>
      {/* <p>{task}</p> */}
      <br></br>
      {todo.task}
      <br></br>
      <input
        type="checkbox"
        value={todo}
        checked={todo.is_complete}
        onChange={() => handleClick(todo)}
      />
    </div>
  );
}
