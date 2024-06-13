import BaseError from './BaseError';

class NetworkError extends BaseError {
  public name = 'NetworkError';

  constructor(message?: string, error?: Error) {
    super(`[NetworkError]${message ? ` : ${message}` : ''}`, error);
  }
}

export default NetworkError;
