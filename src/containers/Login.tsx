import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

import { useReduxDispatch } from '../services'
import { requestSignIn } from '../services/user'

export default function Login(): JSX.Element {
    const dispatch = useReduxDispatch()
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: { email: string, password: string }) => {
        dispatch(requestSignIn(data))
    }
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="email" defaultValue="anne@example.com" ref={register}/>
                <input name="password" type="password" ref={register}/>
                <button type="submit">Login</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    margin: 20px;
    color: red;
`
