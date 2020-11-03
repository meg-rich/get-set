import { ApiError, ApiErrorType } from '../utils/errors/ApiError'
import { AuthError, AuthErrorType } from '../utils/errors/AuthError'
import ApiClient from './ApiClient';

export function AuthClient () {
    const { authClient } = ApiClient();

    const FirebaseAuthErrorCodes = {
        PERMISSION_DENIED: 'PERMISSION_DENIED',
        INVALID_EMAIL: 'auth/invalid-email',
        USER_DISABLED: 'auth/user-disabled',
        USER_NOT_FOUND: 'auth/user-not-found',
        WRONG_PASSWORD: 'auth/wrong-password',
        ACTION_CODE_EXPIRED: 'auth/expired-action-code',
        ACTION_CODE_INVALID: 'auth/invalid-action-code',
        WEAK_PASSWORD: 'auth/weak-password',
        TOO_MANY_REQUESTS: 'auth/too-many-requests',
      }

    const emailLogin = async (email, password) => {
        try {
            const response = await authClient.signInWithEmailAndPassword(
                email,
                password
            )
            return response
        } catch (e) {
            switch (e.code) {
                case FirebaseAuthErrorCodes.USER_NOT_FOUND:
                    throw new AuthError(AuthErrorType.USER_NOT_FOUND)
                case FirebaseAuthErrorCodes.INVALID_EMAIL:
                    throw new AuthError(AuthErrorType.INVALID_EMAIL)
                case FirebaseAuthErrorCodes.WRONG_PASSWORD:
                    throw new AuthError(AuthErrorType.WRONG_PASSWORD)
                case FirebaseAuthErrorCodes.USER_DISABLED:
                    throw new AuthError(AuthErrorType.USER_DISABLED)
                default:
                    throw new ApiError(ApiErrorType.UNKNOWN)
            }
        }
    }

    return {
        emailLogin
    }
}