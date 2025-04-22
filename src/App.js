import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskCard from './components/TaskCard';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';

import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  });
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = filter === 'All' || task.status === filter;
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const toggleCompletion = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const editTask = (index, updatedTask) => {
    const updated = [...tasks];
    updated[index] = { ...updated[index], ...updatedTask };
    setTasks(updated);
  };
  
  
  

  return (
    <div className="container mt-5">
  <h2 className="mb-4 text-center">📋 Task Management Dashboard</h2>
  <TaskForm addTask={addTask} />
  <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
  <Filter setFilter={setFilter} />
  {filteredTasks.length === 0 ? (
    <p className="text-muted">No tasks available.</p>
  ) : (
    filteredTasks.map((task, i) => (
      <TaskCard
  key={i}
  task={task}
  index={i}
  deleteTask={deleteTask}
  toggleCompletion={toggleCompletion}
  editTask={editTask}
/>


    ))
  )}
</div>

  );
}

export default App;
