import {useEffect, useState} from 'react';
import type {AxiosError} from 'axios';

import {get} from '../../utils/AxiosClient';
import {API_URLS} from '../../utils/Endpoints';

interface CategoryObject {
  id: number;
  name: string;
}

interface CategoryResponse {
  trivia_categories: CategoryObject[];
}

export const useQuizCategories = () => {
  const [data, setData] = useState<CategoryObject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | unknown>(null);

  const getCategories = async () => {
    setLoading(true);
    try {
      const res: CategoryResponse = await get(API_URLS.GET_CATEGORIES);
      setData(res.trivia_categories);
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
