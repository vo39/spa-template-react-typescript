import axios, {
  isAxiosError,
  type AxiosError,
  type AxiosRequestConfig,
} from 'axios';
import HTTPClientError from '../errors/HTTPClientError';
import NetworkError from '../errors/NetworkError';
import TimeoutError from '../errors/TimeoutError';
import type HTTPClient from './interfaces/HTTPClient';

const TIMEOUT_ERROR_CODE = 'ECONNABORTED';

const axiosClient = axios.create({});

const AxiosAdapter: HTTPClient = {
  get: async <T>(url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await axiosClient.get<T>(url, config);

      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (isNetworkError(error)) {
          throw new NetworkError(error.message, error);
        }
        if (isTimeoutError(error)) {
          throw new TimeoutError(error.message, error);
        }
        throw new HTTPClientError(error.message, error);
      }
      throw error;
    }
  },

  post: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => {
    try {
      const response = await axiosClient.post<T>(url, data, config);

      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (isNetworkError(error)) {
          throw new NetworkError(error.message, error);
        }
        if (isTimeoutError(error)) {
          throw new TimeoutError(error.message, error);
        }
        throw new HTTPClientError(error.message, error);
      }
      throw error;
    }
  },

  put: async <T>(url: string, data?: unknown, config?: AxiosRequestConfig) => {
    try {
      const response = await axiosClient.put<T>(url, data, config);

      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (isNetworkError(error)) {
          throw new NetworkError(error.message, error);
        }
        if (isTimeoutError(error)) {
          throw new TimeoutError(error.message, error);
        }
        throw new HTTPClientError(error.message, error);
      }
      throw error;
    }
  },

  delete: async <T>(url: string, config?: AxiosRequestConfig) => {
    try {
      const response = await axiosClient.delete<T>(url, config);

      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        if (isNetworkError(error)) {
          throw new NetworkError(error.message, error);
        }
        if (isTimeoutError(error)) {
          throw new TimeoutError(error.message, error);
        }
        throw new HTTPClientError(error.message, error);
      }
      throw error;
    }
  },
};

const isNetworkError = (error: AxiosError) => {
  return !error.response;
};

const isTimeoutError = (error: AxiosError) => {
  return error.code && error.code === TIMEOUT_ERROR_CODE;
};

export default AxiosAdapter;
