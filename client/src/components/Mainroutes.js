// MainRoutes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import EventManagementDashboard from './eventmanegment/EventManagementDashboard';

function MainRoutes() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<App />}>
        
          <Route path="events" element={<EventManagementDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default MainRoutes;
