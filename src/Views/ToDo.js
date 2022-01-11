import React from 'react';
import { useState } from 'react';
import ToDoList from '../Components/ToDoList';

export default function ToDo() {
  const [todo] = useState('');
  return (
    <div>
      <h1> To Do </h1>
      <ToDoList todo={todo} />
    </div>
  );
}
