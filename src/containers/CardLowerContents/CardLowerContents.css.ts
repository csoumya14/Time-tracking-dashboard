import styled from 'styled-components'
import {CardUpper} from '../CardContents/CardContents.css'

export const CardLower = styled.div`
width:90%;
height:122px;
top:0px;
margin:1rem;
border-radius:15px;
align-self:flex-end;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
grid-area:1/1;
background-color:${props => props.theme.palette.neutral.darkBlue};
`
