import React from 'react';
import { deleteTaskById } from '../services/todos';
import './ToDoList.css';
export default function ToDoList({ task, setTask, handleSubmit, handleDelete }) {
  return (
    <div className="todo-list">
      <form className="form">
        <h3>Add Task</h3>
        <div className="form-control">
          <label>Task: </label>
          <input
            type="text"
            placeholder="..."
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            onClick={deleteTaskById}
          />
        </div>
        <div className="action">
          <button className="save" onClick={handleSubmit}>
            Save
          </button>
          <br></br>
          <br></br>
          {/* <button className="delete" onClick={handleDelete}>
            Delete
          </button> */}
        </div>
      </form>
    </div>
  );
}
