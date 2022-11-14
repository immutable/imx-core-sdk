import axios from 'axios';
import { APIError } from '../api';
import { IMXError } from '../types/errors';

/**
 * [Formats an error in the IMXError shape](https://axios-http.com/docs/handling_errors)
 * @param error - The Error object thrown by the request
 * @returns IMXError
 */
export function formatError(error: unknown): IMXError {
  if (axios.isAxiosError(error) && error.response) {
    const apiError: APIError = error.response.data;
    if (apiError.code && apiError.message) {
      return new IMXError({
        code: apiError.code,
        details: apiError.details,
        message: apiError.message,
      });
    }

    return new IMXError({
      code:
        error.code ?? error.response?.status.toString() ?? 'unknown_error_code',
      message: String(error),
    });
  }

  return new IMXError({
    code: 'unknown_error_code',
    message: String(error),
  });
}
