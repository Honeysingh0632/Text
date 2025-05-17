// import React from 'react';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import SearchBar from './components/SearchBar';
// import Table from './components/Table';
// import Pagination from './components/Pagination';
// import './App.css';
// import EventManagementDashboard from './components/eventmanegment/EventManagementDashboard';
// import { Outlet } from 'react-router-dom';

// function App() {
//   return (
   
//     <div className="app">
//     <Header title="Event Requests" />
//     <div className="bottom-section">
//       <Sidebar />
//       <main className="main-content">
//         <div className="event-requests-box">
//          <Outlet />
//         </div>
//       </main>
//       {/* <EventManagementDashboard /> */}
//     </div>
//   </div>
//   );
// }

// export default App;

import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header title="Event Requests" />
      <div className="bottom-section">
        <Sidebar />
        <main className="main-content">
          <div className="event-requests-box">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

