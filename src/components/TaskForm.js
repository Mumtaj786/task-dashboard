import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState({ title: '', status: 'To-Do' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;
    addTask(task);
    setTask({ title: '', status: 'To-Do', dueDate: '' }); // 👈 reset after submit
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <select
          className="form-select"
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
        >
          <option>To-Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <input
            type="date"
            className="form-control mt-2"
            value={task.dueDate}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            />

        <button className="btn btn-primary">Add Task</button>
      </div>
    </form>
  );
}

export default TaskForm;
