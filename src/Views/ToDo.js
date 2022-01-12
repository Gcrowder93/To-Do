import React, { useEffect, useState } from 'react';
import { createToDo, fetchToDos } from '../services/todos';
import ToDoList from '../Components/ToDoList';

export default function ToDo() {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await createToDo(task);
      alert('You have added a new task');
    } catch {
      alert('didnt work');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const taskData = await fetchToDos();
      setTask(taskData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Add New Task</h1>
      <ToDoList task={task} setTask={setTask} handleSubmit={handleSubmit} />
    </div>
  );
}
