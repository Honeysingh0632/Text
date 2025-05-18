import React from 'react';
import TableRow from './TableRow';


function Table() {
  return (
    <div className="table">
      <div className="table-header">
        <div>Event Name</div>
        <div>Event Start</div>
        <div>Event End</div>
        <div>Client Name</div>
        <div>Contact Info</div>
        <div>Venue</div>
        <div>City</div>
        <div>State</div>
        <div>Zip Code</div>

        <div>Venue</div>
        <div>City</div>
        <div>State</div>
        <div>Zip Code</div>
      </div>
      {[...Array(12)].map((_, i) => (
        <TableRow key={i} />
      ))}
    </div>
  );
}

export default Table;
