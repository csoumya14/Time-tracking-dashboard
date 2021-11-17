import styled from 'styled-components'
import {CardHeadingWrapper} from '../CardHeadingDetails/CardHeadingDetails.css'

export const CardTimeWrapper = styled(CardHeadingWrapper)`
height:2.5em;
margin-top:0.5em;
`

export const CurrentP = styled.p`
font-weight: 300;
font-size: 32px;
color:#ffffff;
`
export const PreviousP = styled.p`
font-size:15px;
color:${props => props.theme.palette.neutral.paleBlue};
`