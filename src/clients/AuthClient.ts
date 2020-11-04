import { ApiError, ApiErrorType } from '../utils/errors/ApiError'
import { AuthError, AuthErrorType } from '../utils/errors/AuthError'
import ApiClient, { FirebaseAuthErrorCodes } from './ApiClient'

export interface SignInArguments {
    email: string
    password: string
}
export interface AuthClientMethods {
    emailSignIn: ({email, password}: SignInArguments) => Promise<void>
}
export function AuthClient(): AuthClientMethods {
    const { authClient } = ApiClient();

    async function emailLogin (email: string, password: string): Promise<firebase.default.auth.UserCredential> {
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

    async function emailSignIn ({email, password}:SignInArguments): Promise<void> {
        const { user } = await emailLogin(email, password)
        if (user) {
            return
        }
        throw new Error('Unknown Error')
    }

    return {
        emailSignIn
    }
}