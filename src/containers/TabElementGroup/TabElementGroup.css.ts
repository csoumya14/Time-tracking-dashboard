import styled from 'styled-components'

export const TabElementContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content:space-between;
  
  padding:1.5em;

`
export const Button = styled.button`
  background:transparent;
  border:none;
  font-size:18px;
  
  color:${props => props.theme.palette.neutral.desaturatedBlue};
  &:focus{
    color:#ffffff;
  }  
`