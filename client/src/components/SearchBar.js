import React from 'react';




function SearchBar() {
  return (
    <div className='event'>
        <h2>Event Request</h2>
  
    <div className="search-bar">
      <input type="text"placeholder="&#x1F50D; Search Here..." />
      <button className="add-btn">+</button>
    </div>
    </div>
  );
}

export default SearchBar;
