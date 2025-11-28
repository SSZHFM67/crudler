const baseUrl = 'https://softwarehub.uk/unibase/api';

const request = async (url, method = 'GET', body = null) => {
  let requestObj = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    requestObj = {
      ...requestObj,
      body: JSON.stringify(body),
    };
  }

  try {
    const response = await fetch(`${baseUrl}${url}`, requestObj);
    const result = await response.json();

    return {
      isSuccess: response.ok,
      status: response.status,
      result,
    };
  } catch (error) {
    console.error('API error:', error);
    return {
      isSuccess: false,
      status: 500,
      result: null,
    };
  }
};

const API = {
  get: (url) => request(url, 'GET'),
  post: (url, body) => request(url, 'POST', body),
  put: (url, body) => request(url, 'PUT', body),
  delete: (url) => request(url, 'DELETE'),
};

export default API;