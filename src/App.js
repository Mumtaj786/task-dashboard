import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  });
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((task) =>
    filter === 'All' ? true : task.status === filter
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📋 Task Management Dashboard</h2>
      <TaskForm addTask={addTask} />
      <Filter setFilter={setFilter} />
      {filteredTasks.length === 0 ? (
        <p className="text-muted">No tasks available.</p>
      ) : (
        filteredTasks.map((task, i) => (
          <TaskCard key={i} task={task} index={i} deleteTask={deleteTask} />
        ))
      )}
    </div>
  );
}

export default App;
