// import React from 'react';


// function Sidebar() {
//   return (
//     <aside className="sidebar">
//       <div className="logo">
//       <img className="google-icon " src={require('./images/logo.jpeg')} />
       
//       </div>
//       <nav>
//         <h4>Events</h4>
//         <ul>
//           <li className="active">New Requests</li>
//           <li>Estimate</li>
//           <li>Events</li>
//           <li>Partial Requests</li>
//         </ul>
//         <h4>Users</h4>
//         <ul>
//           <li>Admins</li>
//           <li>Clients</li>
//           <li>Coordinators</li>
//         </ul>
//       </nav>
//       <button className="logout-btn">Logout</button>
//     </aside>
//   );
// }

// export default Sidebar;

import React, { useState } from 'react';
import './Sidebar.css'; // Create this CSS file
import { Link } from 'react-router-dom';

function Sidebar() {
  const [eventsOpen, setEventsOpen] = useState(true);
  const [usersOpen, setUsersOpen] = useState(true);

  const toggleEvents = () => {
    setEventsOpen(!eventsOpen);
  };

  const toggleUsers = () => {
    setUsersOpen(!usersOpen);
  };

  function ListItemWithBranch({ text }) {
    return (
      <div className="list-item-with-branch">
        <div className="branch-icon"></div>
        <span className="list-text">{text}</span>
      </div>
    );
  }

  return (
    <div className="sidebar">
      <div className="sidebar-section" onClick={toggleEvents}>
        <div className="sidebar-header">
          Events
          <span className="arrow">{eventsOpen ? '▲' : '▼'}</span>
        </div>
        {eventsOpen && (
          <div className="sidebar-items">
            <div className="sidebar-item"><Link to='event-management' className='text-light text-decoration-none'> New Request</Link></div>
            <div className="sidebar-item">Estimate</div>
            <div className="sidebar-item">Events <span className="badge">9</span></div>
            <div className="sidebar-item">Partial Requests</div>
          </div>
        )}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-header">Positions</div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-header">Contractors</div>
      </div>

      <div className="sidebar-section" onClick={toggleUsers}>
        <div className="sidebar-header">
          Users
          <span className="arrow">{usersOpen ? '▲' : '▼'}</span>
        </div>
        {usersOpen && (
          <div className="sidebar-items">
               <span className="connector"></span>
            <ListItemWithBranch text="Admins" />
      <ListItemWithBranch text="Clients" />
      <ListItemWithBranch text="Coordinators" />
          </div>
        )}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-header">Profile</div>
      </div>

      <div className="sidebar-logout">
        <span className="logout-icon">⟲</span> Logout
      </div>
    </div>
  );
}

export default Sidebar;
