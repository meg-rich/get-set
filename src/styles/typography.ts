import styled from 'styled-components'
import { StyledProps } from '.'

export const LargeHeading = styled.h2`
    color: ${(props: StyledProps) => props.theme.colors.lightGray};
    font-family: 'Libre Franklin', sans-serif;
    font-size: ${(props: StyledProps) => props.theme.font.size.lg};
    font-weight: ${(props: StyledProps) => props.theme.font.weights.bold};
`
export const MediumHeading = styled.h3``
export const DefaultHeading = styled.h4``
export const SmallHeading = styled.h5``
export const XSmallHeading = styled.h6``
