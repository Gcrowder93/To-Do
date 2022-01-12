import React, { useState } from 'react';
import { createToDo } from '../services/todos';
import ToDoList from '../Components/ToDoList';
// import { useEffect } from 'react';
// import { fetchToDos } from '../services/todos';

export default function ToDo() {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await createToDo(task);
      alert('You have added a new task');
    } catch {
      alert('Please enter a task');
    }
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const taskData = await fetchToDos();
  //       setTask(taskData);
  //       console.log(taskData);
  //     };
  //     fetchData();
  //   }, []);

  // COMMENT BACK IN 'USEEFFECT' AND 'FETCHTODOS'
  // COMMENTING THIS BACK BRINGS IN "OBJECT OBJECT" INTO THE TEXT FIELD, BUT ALSO SHOWS ALL THE TASKS IN CONSOLE
  // MAP THROUGH CURRENTTASK, ASSIGN RADIO BUTTON

  return (
    <div>
      <h1>Add New Task</h1>
      <ToDoList task={task} setTask={setTask} handleSubmit={handleSubmit} />
    </div>
  );
}
