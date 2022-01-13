import React from 'react';

export default function Tasks({ todo, handleClick, handleDelete }) {
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
        onClick={() => handleClick(todo)}
      />
      <br></br>
      <button onClick={() => handleDelete(todo)}>Delete</button>
    </div>
  );
}
