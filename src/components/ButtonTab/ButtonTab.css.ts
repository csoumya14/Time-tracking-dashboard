import styled from 'styled-components'

export const Button = styled.button`
  background:transparent;
  border:none;
  font-size:18px; 
  text-transform: capitalize;
  color:${props => props.theme.palette.neutral.desaturatedBlue};
  &:focus{
    color:#ffffff;
  }  
`