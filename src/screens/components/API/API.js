// src/screens/components/API/API.js

const BASE_URL = 'https://softwarehub.uk/unibase/api';

async function request(endpoint, method = 'GET', data = null) {
  const url = `${BASE_URL}/${endpoint}`;

  const options = {
    method,
  };

  if (data !== null) {
    options.headers = {
      'Content-Type': 'application/json',
    };
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return {
      isSuccess: response.ok,
      result,
      status: response.status,
    };
  } catch (error) {
    console.log('API error:', error);
    return {
      isSuccess: false,
      result: null,
      error,
    };
  }
}

const API = {
  get(endpoint) {
    return request(endpoint, 'GET');
  },
  post(endpoint, data) {
    return request(endpoint, 'POST', data);
  },
  put(endpoint, data) {
    return request(endpoint, 'PUT', data);
  },
  delete(endpoint) {
    return request(endpoint, 'DELETE');
  },
};

export default API;
