import React from 'react'
import {RadioSelectInner} from './RadioSelectInnerContainer.css'
import {RadioSelectInput} from '../../components/RadioSelectInput/RadioSelectInput'

export const RadioSelectInnerContainer = () => {  
  return(
    <RadioSelectInner>
      <RadioSelectInput type="radio" name="report-type" id="daily" value="daily"/>
      <RadioSelectInput type="radio" name="report-type" id="weekly" value="weekly"/>
      <RadioSelectInput type="radio" name="report-type" id="monthly" value="monthly"/>
      </RadioSelectInner>
  )
}