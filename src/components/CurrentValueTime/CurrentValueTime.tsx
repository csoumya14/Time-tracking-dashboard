import React from 'react'
import {CurrentTimeP} from './CurrentValue.css'

export const CurrentValueTime = ({currentTimeValue}:{currentTimeValue:number}) => {
  return(
    <CurrentTimeP>{currentTimeValue} hrs</CurrentTimeP>
  )
}