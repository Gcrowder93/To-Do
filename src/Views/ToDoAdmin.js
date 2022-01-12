import React, { useState } from 'react';
import ToDoList from '../Components/ToDoList';
import { createToDo } from '../services/todos';

export default function ToDoAdmin() {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createToDo(task);
      alert('yay');
    } catch {
      alert('error');
    }
    setTask('');
    window.location.reload();
  };

  return (
    <div>
      <ToDoList task={task} setTask={setTask} handleSubmit={handleSubmit} />
    </div>
  );
}
