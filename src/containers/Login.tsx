import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { Bed, Leaf, Running, Utensils } from '@styled-icons/fa-solid'

import { useReduxDispatch } from '../services'
import { requestSignIn } from '../services/user'
import TextInput from '../components/TextInput'
import { StyledProps } from '../styles'
import { LargeHeading } from '../styles/typography'
import Button from '../components/Button'

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
            <HeadingContainer>
                <RunningIcon />
                <UtensilsIcon />
                <LoginHeading>get set</LoginHeading>
                <LeafIcon />
                <BedIcon />
            </HeadingContainer>
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
                    <Button primary submit>
                        Login
                    </Button>
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
    flex-direction: column;
`
const HeadingContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    width: 100%;
    margin-left: auto;
`
const LoginHeading = styled(LargeHeading)`
    text-align: center;
    margin-bottom: ${(props: StyledProps) => props.theme.spacing.default};
    margin-right: ${(props: StyledProps) => props.theme.spacing.sm};
`
const ButtonContainer = styled.div`
    text-align: center;
    margin-top: ${(props: StyledProps) => props.theme.spacing.md};
`

const RunningIcon = styled(Running)`
    color: ${(props: StyledProps) => props.theme.colors.brandRed};
    height: 24px;
    margin-right: ${(props: StyledProps) => props.theme.spacing.xs};
`
const UtensilsIcon = styled(Utensils)`
    color: ${(props: StyledProps) => props.theme.colors.brandOrange};
    height: 24px;
    margin-right: ${(props: StyledProps) => props.theme.spacing.sm};
`

const LeafIcon = styled(Leaf)`
    color: ${(props: StyledProps) => props.theme.colors.brandGreen};
    height: 24px;
    margin-right: ${(props: StyledProps) => props.theme.spacing.xs};
`

const BedIcon = styled(Bed)`
    color: ${(props: StyledProps) => props.theme.colors.brandBrightBlue};
    height: 22px;
`
