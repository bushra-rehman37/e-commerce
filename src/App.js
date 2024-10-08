import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SignUp from './Components/Auth/SignUp';
import LogIn from './Components/Auth/LogIn';
import ForgotPassword from './Components/Auth/ForgotPassword';
import Dashboard from './Components/Dashboard/Dashboard';
import Cart from './Components/Cart/Cart';
import Sidebar from './Components/Dashboard/Sidebar';

const AppLayout = () => {
  const location = useLocation();

  // Sidebar will be hidden on auth-related pages
  const hideSidebar = location.pathname === '/signup' || location.pathname === '/login' || location.pathname === '/forgot-password';

  return (
    <div className="flex">
      {/* Conditionally render Sidebar */}
      {!hideSidebar && <Sidebar />}

      {/* Main Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;
