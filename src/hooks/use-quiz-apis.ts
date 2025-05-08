import {useEffect, useState} from 'react';
import type {AxiosError} from 'axios';

import {get} from '../utils/AxiosClient';
import {API_URLS} from '../utils/Endpoints';

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

export const useQuizQuestions = () => {
  const [questionsFetch, setQuestionsFetch] = useState<{
    data: CategoryObject[];
    loading: boolean;
    error: AxiosError | unknown;
  }>({
    data: [],
    loading: false,
    error: null,
  });

  const {data, loading, error} = questionsFetch;

  const getQuestions = async (id: string, difficulty: string) => {
    setQuestionsFetch(prev => ({...prev, loading: true}));
    try {
      const url = `${API_URLS.GET_QUESTIONS}?amount=5&category=${id}&difficulty=${difficulty}&type=multiple`;
      const res = await get(url);
      setQuestionsFetch({data: res.results, loading: false, error: null});
    } catch (error) {
      setQuestionsFetch({data: [], loading: false, error});
    }
  };

  return {data, loading, error, getQuestions};
};
