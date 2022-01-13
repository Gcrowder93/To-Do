import React, { useState } from 'react';
import { useEffect } from 'react';
import { fetchToDos } from '../services/todos';

export default function ToDo() {
  const [, setTask] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToDos();
      setTask(data);
    };
    fetchData();
  }, []);

  return <div></div>;
}
