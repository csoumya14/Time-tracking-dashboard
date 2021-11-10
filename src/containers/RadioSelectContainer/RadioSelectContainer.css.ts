import styled from 'styled-components'

export const VisuallyHiddenLegend = styled.legend`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`

export const RadioSelect = styled.fieldset`
  border:none;
  padding: 1.5em;
  white-space: nowrap;
  
`
