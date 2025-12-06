// src/screens/components/API/API.js

const BASE_URL = 'https://softwarehub.uk/unibase/api';

async function request(endpoint, method = 'GET', data = null) {
  // endpoint should start with '/', e.g. '/modules'
  const url = `${BASE_URL}${endpoint}`;

  const options = {
    method,
    headers: {},
  };

  if (data !== null) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);

    // Read body ONCE as text
    const raw = await response.text();

    // Try to JSON-parse the body, fall back to the raw string
    let parsed = null;
    if (raw && raw.length > 0) {
      try {
        parsed = JSON.parse(raw);
      } catch (e) {
        // Not valid JSON, just use the raw text
        parsed = raw;
      }
    }

    // Try to get a useful message
    let message;
    if (parsed && typeof parsed === 'object' && 'message' in parsed) {
      message = parsed.message;
    } else if (typeof parsed === 'string') {
      message = parsed;
    }

    return {
      isSuccess: response.ok,
      result: parsed,
      status: response.status,
      message,
    };
  } catch (error) {
    console.log('API error:', error);
    return {
      isSuccess: false,
      result: null,
      status: 0,
      message: error.message,
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
