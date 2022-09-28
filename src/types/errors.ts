import { APIError } from '../api';

/**
 * Custom Error class that is returned from the API when a request fails
 */
export class IMXError extends Error {
  /**
   * [See a list of thrown error codes](https://docs.x.immutable.com/docs/error-codes/)
   */
  readonly code: string;
  readonly details?: string;

  constructor({ code, details, message }: APIError) {
    super(message);
    this.code = code;
    this.details = details;
  }
}
