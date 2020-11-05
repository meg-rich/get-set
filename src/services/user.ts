import { createAsyncThunk, createSlice, current, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import AuthClient from '../clients/AuthClient'
import { User } from '../clients/UserClient'

import { createActionType } from './utils'

const REDUCER_NAME = 'user'

const createAuthActionType = (name: string): string =>
    createActionType(name, REDUCER_NAME)

export interface UserState {
    value: User | null
    loading: boolean
    error: SerializedError | null
    token: string | null
}

interface SignInParams {
    email: string,
    password: string
}

const initialState: UserState = {
    loading: true,
    value: null,
    error: null,
    token: null,
}

const { emailSignIn, getToken, getCurrentUser, signOut, subscribeToAuthChanges } = AuthClient()

export const requestSignIn = createAsyncThunk(
    createAuthActionType('login'),
    async (params: SignInParams): Promise<void> => {
        await emailSignIn(params)
    }
)

export const requestSignOut = createAsyncThunk(
    createAuthActionType('signOut'),
    (): Promise<void> => signOut()
)

export const subscribeAuth = createAsyncThunk(
    createAuthActionType('subscribeAuth'),
    (envId: string | null, thunkApi): void => {
        const handleAuthUpdate = async (
            params: { uid: string; email: string | null } | null
        ): Promise<void> => {
            const { uid } = params || {}

            if(!uid) {
                thunkApi.dispatch(authChange(null))
                return
            }
            console.log("got here")
            const token = await getToken()
            const currentUser = getCurrentUser()

            thunkApi.dispatch(authSlice.actions.authAddToken(token))
            if (currentUser) {
                const { displayName, email, photoURL, phoneNumber } = currentUser
                const newUser = {
                    displayName,
                    email,
                    photoURL,
                    phoneNumber,
                    uid
                }
                thunkApi.dispatch(authSlice.actions.authChange(newUser))
            }
        }
        subscribeToAuthChanges(
            (args) => {
                handleAuthUpdate(args)
            },
            (error) => {
                throw error
            }
        )
    }
)

const authSlice = createSlice({
    name: REDUCER_NAME,
    initialState,
    reducers: {
        authChange(draft, action: PayloadAction<User | null>) {
            draft.value = action.payload
            draft.loading = false
            draft.error = null
        },
        setAuthLoading(draft, action: PayloadAction<boolean>) {
            draft.loading = action.payload
        },
        authAddToken(draft, action: PayloadAction<string>) {
            draft.token = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(requestSignOut.fulfilled, (draft) => {
            draft.value = null
            draft.token = null
        })
        builder.addCase(requestSignIn.pending, (draft) => {
            draft.loading = true
            draft.error = null
        })
        builder.addCase(requestSignIn.rejected, (draft, action) => {
            draft.loading = false
            draft.error = action.error
        })
        builder.addCase(subscribeAuth.rejected, (draft, action) => {
            console.log('ACTION', action)
            draft.error = action.error
            draft.loading = false
        })
    },
})

export const { authChange, setAuthLoading } = authSlice.actions

interface AppState {
    user: UserState
}

export const selectUser = (state: AppState): User | null => state.user.value

export const selectUserId = (state: AppState): string | null =>
    state.user.value?.uid || null

export const selectUserLoading = (state: AppState): boolean =>
    state.user.loading

export const selectUserError = (state: AppState): SerializedError | null =>
    state.user.error

export const { reducer } = authSlice