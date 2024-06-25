type HTTPRequestConfig = {
  timeout?: number;
  headers?: Record<string, string | string[]>;
};

interface HTTPClient {
  readonly get: <T>(url: string, config?: HTTPRequestConfig) => Promise<T>;
  readonly post: <T>(
    url: string,
    data?: unknown,
    config?: HTTPRequestConfig,
  ) => Promise<T>;
  readonly put: <T>(
    url: string,
    data?: unknown,
    config?: HTTPRequestConfig,
  ) => Promise<T>;
  readonly delete: <T>(url: string, config?: HTTPRequestConfig) => Promise<T>;
}

export default HTTPClient;
