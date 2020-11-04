import { BaseError } from './BaseError'

export enum ApiErrorType {
    UNKNOWN = 'unknown',
    BAD_REQUEST = 'badrequest',
    UNAUTHORIZED = 'unauthorized',
    VALIDATION = 'validation',
    NOT_FOUND = 'notfound',
}

type ErrorMessage = {
    [key in ApiErrorType]?: string
}

export const DEFAULT_MESSAGE = 'An error occured'

const messages: ErrorMessage = {
    [ApiErrorType.UNKNOWN]: DEFAULT_MESSAGE,
    [ApiErrorType.BAD_REQUEST]: 'Bad request',
    [ApiErrorType.UNAUTHORIZED]: 'Insufficient permissions',
}

export class ApiError extends BaseError {
    constructor(
        public readonly type: ApiErrorType, 
        public readonly cause?: Error
    ) {
        super(messages[type] || DEFAULT_MESSAGE, cause)
    }
}