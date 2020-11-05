import { ApiError, ApiErrorType } from './ApiError'

export enum AuthErrorType {
    INVALID_USER_ID = 'invalid_user_id',
    INVALID_EMAIL = 'invalid_email',
    WRONG_PASSWORD = 'wrong_password',
    USER_NOT_FOUND = 'user_not_found',
    USER_DISABLED = 'user_disabled',
    INVALID_ENVIRONMENT = 'invalid_environment'
}

export class AuthError extends ApiError {
    subtype: AuthErrorType
    constructor(subtype: AuthErrorType) {
        super(ApiErrorType.UNAUTHORIZED);
        this.subtype = subtype;
    }
}