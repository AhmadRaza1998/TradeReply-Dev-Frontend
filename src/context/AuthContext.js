'use client'

import React, { createContext, useState, useEffect, useContext } from 'react';
import { getUser } from '../utils/auth';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUser();
        setUser(fetchedUser);
      } catch (error) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const loginUser = (user) => setUser(user);
  const logoutUser = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};