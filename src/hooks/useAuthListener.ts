import { useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import isEqual from 'lodash/isEqual'
import { SerializedError } from '@reduxjs/toolkit'
import {
    subscribeAuth,
    selectUserLoading,
    selectUserError,
    selectUser,
} from '../services/user'
import { useReduxDispatch } from '../services/index'

export default function useAuthListener(
    envId: string | null
): {
    isAuthenticated: boolean
    isLoading: boolean
    error: SerializedError | null
} {
    const user = useSelector(selectUser, isEqual)
    const error = useSelector(selectUserError, isEqual)
    const isLoading = useSelector(selectUserLoading, shallowEqual)

    const getIsAuthenticated = () => {
        return Boolean(!isLoading && !error && user)
    }
    const dispatch = useReduxDispatch()

    useEffect(() => {
        dispatch(subscribeAuth(envId)).then(
            () => {},
            () => {}
        )
    }, [envId, dispatch])

    return { isAuthenticated: getIsAuthenticated(), isLoading, error }
}
