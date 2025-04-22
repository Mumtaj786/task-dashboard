import React from 'react';

function TaskCard({ task, index, deleteTask, toggleCompletion }) {
    const getBadge = () => {
      if (task.status === 'To-Do') return 'bg-warning';
      if (task.status === 'In Progress') return 'bg-info';
      return 'bg-success';
    };
  
    return (
      <div className="card mb-3 shadow-sm">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              <input
                type="checkbox"
                className="form-check-input me-2"
                checked={task.completed}
                onChange={() => toggleCompletion(index)}
              />
              {task.title}
            </h5>
            <span className={`badge ${getBadge()}`}>{task.status}</span>
          </div>
          <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
  

export default TaskCard;
