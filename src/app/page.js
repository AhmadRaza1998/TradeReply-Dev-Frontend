'use client';

import React, { useState, useEffect } from 'react';
import { get, post } from '@/utils/apiUtils'; 
import { AuthProvider } from '@/context/AuthContext';


const Home = () => {
  const [status, setStatus] = useState(null);
  
  const fetchStatus = async () => {
      try {
      const data = await get('/status'); 
      setStatus(data);
    } catch (error) {
      console.error('Error fetching status:', error);
    }
  };


  // const sendData = async () => {
  //   try {
  //     const data = await post('/submit', { name: 'John Doe' }); 
  //     console.log('Data submitted:', data);
  //   } catch (error) {
  //     console.error('Error submitting data:', error);
  //   }
  // };


  return (
  <AuthProvider>
    <div>
      <button onClick={fetchStatus}>Fetch Status</button>
      {/* <button onClick={sendData}>Send Data</button> */}
      {status && <div>Status: {JSON.stringify(status)}</div>}
    </div>
  </AuthProvider>    
  );
};

export default Home;