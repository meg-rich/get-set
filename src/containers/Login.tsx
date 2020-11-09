import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

import { useReduxDispatch } from '../services'
import { requestSignIn } from '../services/user'
import TextInput from '../components/TextInput'

type LoginForm = {
    email: string
    password: string
}
export default function Login(): JSX.Element {
    const dispatch = useReduxDispatch()
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const { register, handleSubmit } = useForm<LoginForm>()
    const onSubmit = async (data: LoginForm) => {
        await dispatch(requestSignIn(data))
    }
    return (
        <LoginContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextInput
                        name="email"
                        defaultValue="anne@example.com"
                        register={register}
                    />
                    <TextInput
                        name="password"
                        type="password"
                        register={register}
                    />
                </div>
                <ButtonContainer>
                    <button type="submit">Login</button>
                </ButtonContainer>
            </form>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
`
const ButtonContainer = styled.div`
    text-align: center;
`
