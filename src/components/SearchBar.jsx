// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ searchTerm, onSearch, suggestions }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  return (
    <div className="search-bar">
      <input
        data-testid="autocomplete-input"
        type="text"
        value={searchTerm}
        placeholder="Search Symptoms, Doctors, Specialists, Clinics"
        onChange={(e) => {
          onSearch(e.target.value);
          setShowSuggestions(true);
        }}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.slice(0, 3).map((doc, index) => (
            <li
              key={index}
              data-testid="suggestion-item"
              onClick={() => onSearch(doc.name, true)}
            >
              {doc.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
