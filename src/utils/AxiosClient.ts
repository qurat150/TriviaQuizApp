import Axios, {AxiosInstance} from 'axios';

import {API_URLS} from './Endpoints';

const API_AXIOS: AxiosInstance = Axios.create({
  baseURL: API_URLS.BASE_URL,
});

const get = async (endPoint: string = '', headers = {}) => {
  try {
    const response = await API_AXIOS.get(endPoint, {headers});
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {get};
