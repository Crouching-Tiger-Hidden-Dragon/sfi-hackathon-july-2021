import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://localhost:3004',
  // withCredentials: true,
});

export const serverRequest = axios.create({
  baseURL: 'https://oauth2-jwt.herokuapp.com',
  // withCredentials: true,
});

export const resolve = async (promise) => {
  try {
    const response = await promise;
    return response;
  } catch (error) {
    return error;
  }
};
