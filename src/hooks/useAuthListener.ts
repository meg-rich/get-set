import { useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import isEqual from 'lodash/isEqual'
import { SerializedError } from '@reduxjs/toolkit'
import {
    subscribeAuth,
    selectUserLoading,
    selectUserError,
} from '../services/user'
import { useReduxDispatch } from '../services/index'
import { selectUser } from '../services/user'

export const useAuthListener = (
    envId: string | null
): {
    isAuthenticated: boolean
    isLoading: boolean
    error: SerializedError | null
} => {
    const getIsAuthenticated = () => {
        const user = useSelector(selectUser, isEqual)
        const userError = useSelector(selectUserError, isEqual)
        const isLoading = useSelector(selectUserLoading, shallowEqual)
    
        return Boolean(!isLoading && !userError && user)
    }
    const dispatch = useReduxDispatch()
    const isLoading = useSelector(selectUserLoading, shallowEqual)
    const error = useSelector(selectUserError, isEqual)

    useEffect(() => {
        dispatch(subscribeAuth(envId))
    }, [envId, dispatch])

    return { isAuthenticated: getIsAuthenticated(), isLoading, error }
}