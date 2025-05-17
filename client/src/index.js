import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
// import Setmain from './pages/Setmain';
import EventManagementDashboard from './components/eventmanegment/EventManagementDashboard';
import Setmain from './components/Setmain';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Setmain/>} /> {/* Default route */}
        <Route path="event-requests" element={<Setmain />} />
        <Route path="event-management" element={<EventManagementDashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
