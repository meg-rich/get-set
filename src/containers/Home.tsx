import React from 'react'
import styled from 'styled-components'
import { useReduxDispatch } from '../services'

import { requestSignOut } from '../services/user'

export default function Home(): JSX.Element {
    const dispatch = useReduxDispatch()
    return (
        <Container>
            <button type="button" onClick={() => dispatch(requestSignOut())}>
                Sign Out
            </button>
        </Container>
    )
}

const Container = styled.div`
    margin: 20px;
    color: red;
`
