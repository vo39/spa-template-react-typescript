import ExtensibleCustomError from 'extensible-custom-error';

class BaseError extends ExtensibleCustomError {
  public rootError: Error | undefined;

  constructor(message?: string, error?: Error) {
    super(message);
    this.rootError = error;
  }
}

export default BaseError;
