import React from 'react';

export default function Tasks({ todo, handleClick }) {
  console.log(todo);
  return (
    <div>
      {/* <p>{task}</p> */}
      <br></br>
      {todo.task}
      <br></br>
      <input
        checked={todo.id.is_complete}
        type="checkbox"
        onChange={() => handleClick(todo)}
        value={todo}
      />
    </div>
  );
}
