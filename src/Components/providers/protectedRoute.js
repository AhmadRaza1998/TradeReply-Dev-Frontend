'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux'; 

const ProtectedRoute = ({ children }) => {
    function getCookie(name) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }
    
    const token = getCookie('token');
    const router = useRouter();
  const user = useSelector((state) => state.auth.user); 

  useEffect(() => {
    if (!user || !token) {
      
      router.push('/login');
    }
  }, [user, router]); 

  if (!user) {
    
    return <div>Loading...</div>;
  }

  return <>{children}</>; 
};

export default ProtectedRoute;
