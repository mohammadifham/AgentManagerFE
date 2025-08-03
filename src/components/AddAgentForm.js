import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './ManageAgents.css'; // Fancy styles in separate CSS

function ManageAgents() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [agents, setAgents] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData')) || [];
    setAgents(data);
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem('userData', JSON.stringify(data));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedAgents = [form, ...agents];
    setAgents(updatedAgents);
    saveToLocalStorage(updatedAgents);
    setForm({ name: '', email: '', phone: '', password: '' });
  };

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const newAgents = result.data.map((row) => ({
          name: row.name || '',
          email: row.email || '',
          phone: row.phone || '',
          password: row.password || ''
        }));
        const updatedAgents = [...newAgents, ...agents];
        setAgents(updatedAgents);
        saveToLocalStorage(updatedAgents);
      }
    });
  };

  return (
    <div className="container">
      <h2>🧑‍💼 Manage Agents</h2>

      <form className="form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className='button' type="submit">Add Agent</button>
      </form>

      <div className="upload-box">
        <label htmlFor="csv-upload">📤 Upload CSV:</label>
        <input type="file" id="csv-upload" accept=".csv" onChange={handleCSVUpload} />
      </div>

      <h3>📋 Agent List</h3>
      <div className="agent-list">
        {agents.length === 0 ? (
          <p>No agents added yet.</p>
        ) : (
          agents.map((agent, index) => (
            <div className="agent-card" key={index}>
              <h4>{agent.name}</h4>
              <p>Email: {agent.email}</p>
              <p>Phone: {agent.phone}</p>
              <p>Password: {agent.password}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ManageAgents;
