import axios from 'axios';
import Cookies from 'js-cookie';

const apiUrl = 'http://127.0.0.1:8000/api'; 
const Url = 'http://127.0.0.1:8000'; 


export const register = async (userData) => {
  try {
    await axios.get(`${Url}/sanctum/csrf-cookie`, {
      withCredentials: true
    });

    const response = await axios.post(`${apiUrl}/register`, 
      userData,
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      }
    );
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
  }
};

export const login = async (credentials) => {

  try {
    await axios.get(`${Url}/sanctum/csrf-cookie`, {
      withCredentials: true
    });

    const response = await axios.post(`${apiUrl}/login`, 
      credentials,
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      }
    );
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  

    // const { token } = response.data;
  
    // Cookies.set('auth_token', token, { expires: 7, secure: true });

  }
};

export const logout = () => {
  Cookies.remove('auth_token');
};

export const getUser = async () => {
  const token = Cookies.get('auth_token');
  if (!token) return null;

  try {
    const response = await axios.get(`${apiUrl}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
