import React, { useState } from 'react';
import API from '../services/api';

function Signup() {
  const [formData, setFormData] = useState({
    // name: '',
    email: '',
    // phone: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    res.json()
    .then(response=> setMessage(response.msg ))
    .catch((err)=>  setMessage(err.rmsg || 'Signup failed'))

    } catch (err) {
      setMessage(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      {/* <input name="name" placeholder="Name" onChange={handleChange} required /> */}
      <input name="email" placeholder="Email" onChange={handleChange} required />
      {/* <input name="phone" placeholder="Phone" onChange={handleChange} required /> */}
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Signup</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default Signup;