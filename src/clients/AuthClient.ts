import { ApiError, ApiErrorType } from '../utils/errors/ApiError'
import { AuthError, AuthErrorType } from '../utils/errors/AuthError'
import ApiClient, { FirebaseAuthErrorCodes } from './ApiClient'

export interface SignInArguments {
    email: string
    password: string
}
export interface AuthCredentials {
    uid: string
    email: string | null
}
export interface AuthClientMethods {
    getCurrentUser: () => firebase.default.User | null
    emailSignIn: ({ email, password }: SignInArguments) => Promise<void>
    getToken: () => Promise<string>
    signOut: () => Promise<void>
    subscribeToAuthChanges: (
        onAuthChange: (args: AuthCredentials | null) => void,
        onError: (e: Error) => void
    ) => void
}
export default function AuthClient(): AuthClientMethods {
    const { authClient } = ApiClient()

    async function emailLogin(
        email: string,
        password: string
    ): Promise<firebase.default.auth.UserCredential> {
        try {
            const response = await authClient.signInWithEmailAndPassword(
                email,
                password
            )
            return response
        } catch (_e) {
            const e = _e as firebase.default.auth.AuthError
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

    async function emailSignIn({
        email,
        password,
    }: SignInArguments): Promise<void> {
        const { user } = await emailLogin(email, password)
        if (user) {
            return
        }
        throw new Error('Unknown Error')
    }

    function signOut(): Promise<void> {
        return authClient.signOut()
    }

    async function getToken(): Promise<string> {
        const token = await authClient.currentUser?.getIdToken()
        if (!token) {
            throw new Error('Not logged in')
        }
        return token
    }

    function getCurrentUser(): firebase.default.User | null {
        return authClient.currentUser
    }

    function subscribeToAuthChanges(
        onAuthChange: (args: AuthCredentials | null) => void,
        onError: (e: Error) => void
    ): void {
        authClient.onIdTokenChanged((user): void => {
            if (!user) {
                onAuthChange(null)
            } else {
                try {
                    onAuthChange({ uid: user.uid, email: user.email })
                } catch (e) {
                    onError(e)
                }
            }
        })
    }

    return {
        getCurrentUser,
        emailSignIn,
        getToken,
        signOut,
        subscribeToAuthChanges,
    }
}
