import React from 'react';
import './FilterBar.css';

function FilterBar({ onFilter }) {
  const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

  return (
    <div className="filter-bar">
      {classes.map(c => (
        <button key={c} onClick={() => onFilter(c)}>
          {c}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
