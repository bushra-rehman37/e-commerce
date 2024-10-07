import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Cart from './Components/Cart/Cart';
import Sidebar from './Components/Dashboard/Sidebar';

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar Component - always present */}
        <Sidebar />

        {/* Main Content with Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
