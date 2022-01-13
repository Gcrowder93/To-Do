import React, { useState, useEffect } from 'react';
import Tasks from '../Components/Tasks';
import ToDoList from '../Components/ToDoList';
import { createToDo, fetchToDos, toggleCompleted } from '../services/todos';
import { deleteTaskById } from '../services/todos';
import './Auth.css';

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

  const handleDelete = async ({ id }) => {
    const shouldDelete = confirm('Do you want to delete this task?');

    if (shouldDelete) {
      const resp = await deleteTaskById(id);
      // const resp = await fetchToDos();
      setTask(resp);
    }
    window.location.reload();
  };

  const handleClick = async (todo) => {
    await toggleCompleted(todo.id, !todo.is_complete);
    const fetchData = await fetchToDos();
    setCurrentTask(fetchData);
    window.location.reload();
  };

  return (
    <>
      <div>
        <h1>Check A Box Once You Complete A Task!</h1>
        <ul>
          {currentTasks.map((todo) => (
            <div key={todo}>
              <Tasks todo={todo} handleClick={handleClick} handleDelete={handleDelete} />
              <br></br>
              {/* <button className="deletebutton">
                Delete
                <Tasks todo={todo} handleClick={handleDelete} />
              </button> */}
              <br></br>
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
