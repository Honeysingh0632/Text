import React from 'react';
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';



function TableRow() {
  return (
    <div className="table-row">
      <div><Link to='/event-management' className='text-light bg-dark text-decoration-none'> 👁 Filled Name</Link></div>
      <div>Jan 12, 2024</div>
      <div>Jan 14, 2024</div>
      <div>Muhammad Asad</div>
      <div>+123 566 7890</div>
      <div>Lorem Ipsum Dolor Sit Amet</div>
      <div>-</div>
      <div>-</div>
      <div>-</div>
    </div>
  );
}

export default TableRow;
