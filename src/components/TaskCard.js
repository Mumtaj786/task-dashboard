import React, { useState } from 'react';

function TaskCard({ task, index, deleteTask, toggleCompletion, editTask }) {
  const [editing, setEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editStatus, setEditStatus] = useState(task.status);

  const handleSave = () => {
    editTask(index, { title: editTitle, status: editStatus });
    setEditing(false);
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        {editing ? (
          <>
            <input
              type="text"
              className="form-control mb-2"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <select
              className="form-select mb-2"
              value={editStatus}
              onChange={(e) => setEditStatus(e.target.value)}
            >
              <option>To-Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>
            <button className="btn btn-success btn-sm me-2" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-secondary btn-sm" onClick={() => setEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <div className="d-flex justify-content-between align-items-center">
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
               {/* Show Due Date if available */}
                {task.dueDate && (
                    <small className="text-muted">📅 Due: {task.dueDate}</small>
                )}

                <br />
              <span className={`badge bg-${task.status === 'To-Do' ? 'warning' : task.status === 'In Progress' ? 'info' : 'success'}`}>
                {task.status}
              </span>
            </div>
            <div>
              <button className="btn btn-primary btn-sm me-2" onClick={() => setEditing(true)}>
                Edit
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
