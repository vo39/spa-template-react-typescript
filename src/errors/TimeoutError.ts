import BaseError from './BaseError';

class TimeoutError extends BaseError {
  public name = 'TimeoutError';

  constructor(message?: string, error?: Error) {
    super(`[TimeoutError]${message ? ` : ${message}` : ''}`, error);
  }
}

export default TimeoutError;
