import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="input-group mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search tasks by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <span className="input-group-text">
        🔍
      </span>
    </div>
  );
}

export default SearchBar;
