import BaseError from './BaseError';

class HTTPClientError extends BaseError {
  public name = 'HTTPClientError';

  constructor(message?: string, error?: Error) {
    super(`[HTTPClientError]${message ? ` : ${message}` : ''}`, error);
  }
}

export default HTTPClientError;
