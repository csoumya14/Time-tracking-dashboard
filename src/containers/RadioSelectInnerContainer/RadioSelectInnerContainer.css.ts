import styled from 'styled-components'

export const RadioSelectInner = styled.div`
  display: flex;
  align-items:center;
  justify-content:space-between;
  
`
export const Label = styled.label` 
  cursor: pointer;
  font-size:18px;
  color:${props => props.theme.palette.neutral.desaturatedBlue};
`

export const Input = styled.input`
-moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: none;
  margin: 0;
  width: 5%;
  opacity: 0.00001;
  &:checked + ${Label} {
    color:#ffffff;
  }
  &:not(:checked):hover + ${Label} {
    text-decoration: underline;
  }
`