import React, { useState, useEffect } from 'react';
import Tasks from '../Components/Tasks';
import ToDoList from '../Components/ToDoList';
import { createToDo, fetchToDos, toggleCompleted } from '../services/todos';

export default function ToDoAdmin() {
  const [task, setTask] = useState('');
  const [currentTasks, setCurrentTask] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToDos();
      setCurrentTask(data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createToDo(task);
      alert('~ You have added a task ~');
    } catch {
      alert('error');
    }
    setTask('');
    window.location.reload();
  };

  const handleClick = async (todo) => {
    await toggleCompleted(todo.id, !todo.is_complete);
    setCurrentTask((prevState) =>
      prevState.map((todo) =>
        todo.id === todo.id ? { ...todo, is_complete: !todo.is_complete } : todo
      )
    );
  };

  return (
    <>
      <div>
        <h1>Check A Box Once You Complete A Task!</h1>
        <ul>
          {currentTasks.map((todo) => (
            <div key={todo.id}>
              <Tasks todo={todo} handleClick={handleClick} />
            </div>
          ))}
        </ul>
      </div>
      <div>
        <ToDoList task={task} setTask={setTask} handleSubmit={handleSubmit} />
      </div>
    </>
  );
}
