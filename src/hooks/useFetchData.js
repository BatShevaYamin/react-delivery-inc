import { useState, useEffect } from 'react';
import fetchData from '../services/fetchData';

const useFetchData = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const newData = await fetchData(url);
      setData(newData);
    };

    fetchDataFromApi();
  }, [url]);
  return data;
};

export default useFetchData;
