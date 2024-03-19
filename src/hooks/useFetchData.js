import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
          .then(data => data.json());
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  return data;
};

export default useFetchData;
