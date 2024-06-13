type HTTPRequestConfig = {
  timeout?: number;
  headers?: Record<string, string | string[]>;
};

interface HTTPClient {
  get: <T>(url: string, config?: HTTPRequestConfig) => Promise<T>;
  post: <T>(
    url: string,
    data?: unknown,
    config?: HTTPRequestConfig,
  ) => Promise<T>;
  put: <T>(
    url: string,
    data?: unknown,
    config?: HTTPRequestConfig,
  ) => Promise<T>;
  delete: <T>(url: string, config?: HTTPRequestConfig) => Promise<T>;
}

export default HTTPClient;
