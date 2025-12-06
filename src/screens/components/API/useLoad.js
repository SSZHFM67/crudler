// src/screens/components/API/useLoad.js
import { useEffect, useState } from 'react';
import API from './API';

const useLoad = (endpoint) => {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadRecords = async () => {
    setIsLoading(true);

    const response = await API.get(endpoint);

    if (response.isSuccess) {
      setRecords(response.result);
    } else {
      console.log('Error loading', endpoint, response.status);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    loadRecords();
  }, [endpoint]);

  return { records, isLoading, loadRecords };
};

export default useLoad;