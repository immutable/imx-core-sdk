import axios from 'axios';
import { APIError } from '../api';

/**
 * Custom error code for an unknown thrown error
 */
export const UnknownErrorCode = 'unknown_error_code';

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

/**
 * [Formats an error in the IMXError shape](https://axios-http.com/docs/handling_errors)
 * @param error - The Error object thrown by the request
 * @returns IMXError
 */
export function formatError(error: unknown): IMXError {
  if (axios.isAxiosError(error) && error.response) {
    const apiError: APIError = error.response.data;
    return new IMXError({
      code: apiError.code,
      details: apiError.details,
      message: apiError.message,
    });
  }
  return new IMXError({
    code: UnknownErrorCode,
    message: String(error),
  });
}
