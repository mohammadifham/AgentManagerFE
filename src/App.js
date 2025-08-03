import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import AddAgentForm from './components/AddAgentForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<LoginForm />} />

        {/* Protected Routes */}
      <Route
    path="/dashboard"
    element={
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    }
  />
  <Route
  path="/test"
  element={
    <PrivateRoute>
      <div>Test Route Secured</div>
    </PrivateRoute>
  }
/>
        <Route
          path="/addAgent"
          element={
            <PrivateRoute>
              <AddAgentForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
