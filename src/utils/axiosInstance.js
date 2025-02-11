import axios from 'axios';
import { useRouter } from 'next/router'; 

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => response,  
  (error) => {
    
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        
        console.log('Unauthorized access. Redirecting to login...');
        
        const router = useRouter();
        router.push('/login');         
        localStorage.removeItem('authToken');
      }

      
      if (status === 404) {
        console.error('Resource not found!');
      } else if (status >= 500) {
        console.error('Server error! Please try again later.');
      }
    } else {
      console.error('Network error or request timeout.');
    }
    
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
