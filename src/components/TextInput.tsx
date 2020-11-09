import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { StyledProps } from '../styles'

type TextInputProps = {
    name: string
    defaultValue?: string
    register: ReturnType<typeof useForm>['register']
    type?: string
}
export default function TextInput({
    name,
    defaultValue,
    register,
    type,
}: TextInputProps): JSX.Element {
    return (
        <StyledTextInput
            name={name}
            defaultValue={defaultValue}
            ref={register}
            type={type}
        />
    )
}

TextInput.defaultProps = {
    defaultValue: 'example',
    type: 'text',
}

const StyledTextInput = styled.input`
    margin-left: ${(props: StyledProps) => props.theme.spacing.xs};
    margin-left: ${(props: StyledProps) => props.theme.spacing.xs};
    margin-bottom: ${(props: StyledProps) => props.theme.spacing.default};
    background-color: ${(props: StyledProps) => props.theme.colors.brandBlue};
    border-radius: 2px;
    padding: ${(props: StyledProps) => {
        return `${props.theme.spacing.xs} ${props.theme.spacing.xs}`
    }};
    border: 1px solid ${(props: StyledProps) => props.theme.colors.lightGray};
    color: ${(props: StyledProps) => props.theme.colors.lightGray};
    font-size: ${(props: StyledProps) => props.theme.font.size.default};
    &:focus {
        border: 2px solid
            ${(props: StyledProps) => props.theme.colors.lightGray};
        outline: none;
    }
`
