import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [finalData, setFinalData] = useState([]);
  const [error, setError] = useState(false);

  async function getFetch() {
    try {
      const response = await axios.get(url);
      setFinalData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    getFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {loading, finalData, error};
};

export default useFetch;
