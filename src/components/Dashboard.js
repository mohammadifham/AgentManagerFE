import React from 'react';
import AddAgentForm from './AddAgentForm';
import Logout from './Logout';

function Dashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Admin Dashboard</h1>

        <h2 style={styles.subHeading}>Add Agent</h2>
        <AddAgentForm />

      <div style={styles.logoutSection}>
        <Logout />
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, sans-serif',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '40px',
    color: '#343a40',
  },
  subHeading: {
    fontSize: '1.5rem',
    color: '#495057',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
    margin: '0 auto 30px auto',
  },
  logoutSection: {
    textAlign: 'center',
    marginTop: '40px',
  },
};

export default Dashboard;
