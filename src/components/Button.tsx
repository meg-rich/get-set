import React from 'react'
import styled from 'styled-components'

import { StyledProps } from '../styles'

type ButtonProps = {
    submit?: boolean
    children: string
    primary?: boolean
}
export default function Button({
    submit,
    children,
    primary,
}: ButtonProps): JSX.Element {
    return (
        <StyledButton primary={primary} type={submit ? 'submit' : 'button'}>
            {children}
        </StyledButton>
    )
}

Button.defaultProps = {
    submit: false,
    primary: false,
}

interface StyledButtonProps extends StyledProps {
    primary?: boolean
}
export const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${(props: StyledButtonProps) =>
        props.primary ? props.theme.colors.darkGray : ''};
    padding: ${(props: StyledButtonProps) => {
        return `${props.theme.spacing.xs} ${props.theme.spacing.default}`
    }};
    border-radius: 4px;
    border: ${(props: StyledButtonProps) =>
        `1px solid ${props.theme.colors.mediumGray}`};
    font-weight: ${(props: StyledButtonProps) => props.theme.font.weights.bold};
    color: ${(props: StyledButtonProps) => props.theme.colors.lightGray};
    text-transform: uppercase;
`
