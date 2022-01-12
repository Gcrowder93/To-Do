import React from 'react';

export default function ToDoList({ task, setTask, handleSubmit }) {
  return (
    <div className="todo-list">
      <form>
        <h3>Add Task</h3>
        <div className="form-control">
          <label>Task: </label>
          <input
            className="control"
            placeholder="..."
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>
        <div className="action">
          <button className="save-task" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
