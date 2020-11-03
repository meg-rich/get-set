import { BaseError } from './BaseError'

export const ApiErrorType = {
    UNKNOWN: 'unknown',
    BAD_REQUEST: 'badrequest',
    UNAUTHORIZED: 'unauthorized',
    VALIDATION: 'validation',
    NOT_FOUND: 'notfound',
}

export const DEFAULT_MESSAGE = 'An error occured'

const messages = {
    [ApiErrorType.UNKNOWN]: DEFAULT_MESSAGE,
    [ApiErrorType.BAD_REQUEST]: 'Bad request',
    [ApiErrorType.UNAUTHORIZED]: 'Insufficient permissions',
}

export class ApiError extends BaseError {
    constructor(type, cause) {
        super(messages[type] || DEFAULT_MESSAGE, cause)
    }
}