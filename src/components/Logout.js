import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

function Logout() {
   const navigate = useNavigate();
const logout  =() =>{
  navigate("/")
    localStorage.setItem("token", null);
}
  return (
    
      <button onClick={logout} >Logout</button>
  );
}

export default Logout;
