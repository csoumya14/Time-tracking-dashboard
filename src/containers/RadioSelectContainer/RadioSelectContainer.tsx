import React from 'react'
import { RadioSelect,VisuallyHiddenLegend } from './RadioSelectContainer.css'
import { RadioSelectInnerContainer } from '../RadioSelectInnerContainer/RadioSelectInnerContainer';

export const RadioSelectElement = () => {

  
  return(
    <RadioSelect>
      <VisuallyHiddenLegend>Report frequency</VisuallyHiddenLegend>
      <RadioSelectInnerContainer/>
         
    </RadioSelect>
  )
}

