import React from 'react';
import './search-box.style.css';

const SearchBox = ({ placeholder, handleInputChange }) => {

  return (
    <div>
        <input type="search"
         placeholder={placeholder}
         onChange={handleInputChange}
         className="search"
        />
    </div>
  )
};

export default SearchBox;
