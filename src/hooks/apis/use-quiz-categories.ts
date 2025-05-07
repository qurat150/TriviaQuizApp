import {useEffect, useState} from 'react';

import {get} from '../../utils/AxiosClient';
import {API_URLS} from '../../utils/Endpoints';

export const useQuizCategories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCategories = async () => {
    setLoading(true);
    try {
      const data = await get(API_URLS.GET_CATEGORIES);
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return {data, loading, error};
};
