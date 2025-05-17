// EventManagementDashboard.js
import React from 'react';
import './eventm.css';
import { Link } from 'react-router-dom';

function EventManagementDashboard() {
  const positionsData = [
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
    { position: 'Camera 1 (Video)', time: '9 am - 7 pm', info: 'LP default', quantity: 20 },
  ];

  const meetingRoomsData = [
    { name: 'Meeting Room 1', positions: 12, startDate: '12 Jan, 2023', endDate: '15 Jan, 2023' },
    { name: 'Meeting Room 2', positions: 12, startDate: '12 Jan, 2023', endDate: '15 Jan, 2023' },
    { name: 'Meeting Room 3', positions: 12, startDate: '12 Jan, 2023', endDate: '15 Jan, 2023' },
    { name: 'Meeting Room 4', positions: 12, startDate: '12 Jan, 2023', endDate: '15 Jan, 2023' },
    { name: 'Meeting Room 5', positions: 12, startDate: '12 Jan, 2023', endDate: '15 Jan, 2023' },
  ];

  return (
    <div className="event-management-dashboard">
      <div className="header">
        <button className="back-button"><Link to="/event-requests">←</Link></button>
        <h2 className="event-name-details">Event Name (Venue Details)</h2>
      </div>

      <div className="navigation-tabs">
        <button className="tab active">Event Details</button>
        <button className="tab">Assign Coordinator/Coordinator</button>
        <button className="tab">Session Management</button>
        <button className="tab">Generate SOW</button>
      </div>

      <div className="content-area">
        <div className="left-panel w-50">
          <div className="assign-coordinator-container">
            <h6>Assign Coordinator</h6>
            <div className="search-coordinator fs-6">
              <select>
                <option>Search Coordinator</option>
                {/* Add options dynamically */}
              </select>
            </div>
            <button className="add-new-coordinator fs-6">Add New Coordinator</button>
          </div>

          <div className="assign-contractor-container">
            <h3>Assign Contractor</h3>
            {/* Your contractor assignment UI here */}
          </div>

          <div className="meeting-rooms-container">
            {meetingRoomsData.map((room, index) => (
              <div key={index} className="meeting-room-card">
                <h3>{room.name} <span className="positions">+{room.positions} Positions</span></h3>
                <p className="date-range">Start from {room.startDate} - Ends at {room.endDate}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="middle-panel">
          <div className="event-info-box">
            <h3>Event Name (Venue Here)</h3>
            <p>Start: 12-12-2023</p>
            <p>Ends: 15-12-2023</p>
            <p>Venue Address: Some Location 12. Name Here. City, State.</p>
          </div>

          <div className="positions-section">
            <h3>Positions</h3>
            <table className="positions-table">
              <thead>
                <tr>
                  <th>Position</th>
                  <th>Time</th>
                  <th>Info</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {positionsData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.position}</td>
                    <td>{item.time}</td>
                    <td>{item.info}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <select>
                        <option>Select Contractor</option>
                        {/* Add contractor options */}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <button>←</button>
              <span>...</span>
              <button>→</button>
            </div>
          </div>
        </div>

        {/* <div className="right-panel">
          // Potential for other components
        </div> */}
      </div>

      <div className="footer">
        <button className="save-edits-button">Save Edits</button>
      </div>
    </div>
  );
}

export default EventManagementDashboard;