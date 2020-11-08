import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

import { useReduxDispatch } from '../services'
import { requestSignIn } from '../services/user'

export default function Login(): JSX.Element {
    const dispatch = useReduxDispatch()
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data: { email: string; password: string }) => {
        await dispatch(requestSignIn(data))
    }
    return (
        <LoginContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="email"
                    defaultValue="anne@example.com"
                    ref={register}
                />
                <input name="password" type="password" ref={register} />
                <button type="submit">Login</button>
            </form>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
