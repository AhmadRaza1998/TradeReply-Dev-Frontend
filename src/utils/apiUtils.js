import axiosInstance from './axiosInstance';

// GET Request Utility
export const get = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error('Error with GET request:', error);
    throw error; // Re-throw for further handling
  }
};

// POST Request Utility
export const post = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Error with POST request:', error);
    throw error;
  }
};

// PUT Request Utility
export const put = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    console.error('Error with PUT request:', error);
    throw error;
  }
};

// DELETE Request Utility
export const deleteRequest = async (url) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    console.error('Error with DELETE request:', error);
    throw error;
  }
};