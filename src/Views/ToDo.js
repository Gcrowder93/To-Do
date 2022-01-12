import React, { useState } from 'react';
// import Tasks from '../Components/Tasks';
import { useEffect } from 'react';
import { fetchToDos } from '../services/todos';

export default function ToDo() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchToDos();
      setTask(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* {task.map((task) => (
        <div key={task.id}>
          <Tasks {...task} />
        </div>
      ))} */}
    </div>
  );
}
