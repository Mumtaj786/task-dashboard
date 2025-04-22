import React from 'react';

function Filter({ setFilter }) {
  return (
    <div className="btn-group mb-3">
      <button className="btn btn-outline-primary" onClick={() => setFilter('All')}>
        All
      </button>
      <button className="btn btn-outline-warning" onClick={() => setFilter('To-Do')}>
        To-Do
      </button>
      <button className="btn btn-outline-info" onClick={() => setFilter('In Progress')}>
        In Progress
      </button>
      <button className="btn btn-outline-success" onClick={() => setFilter('Done')}>
        Done
      </button>
    </div>
  );
}

export default Filter;
