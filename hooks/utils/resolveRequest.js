import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://localhost:3004',
});

export const resolve = async (promise) => {
  try {
    const response = await promise;
    return response;
  } catch (error) {
    return error;
  }
};
