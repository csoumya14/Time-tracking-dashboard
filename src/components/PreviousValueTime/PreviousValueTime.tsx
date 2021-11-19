import React from 'react'
import { PreviousTimeP } from './PreviousValueTime.css'

export const PreviousValueTime = ({previousTimeValue,timeFrame}:{previousTimeValue:number;timeFrame:string}) => {
  return(
    <PreviousTimeP>Last <span>{timeFrame}</span> - {previousTimeValue}hrs</PreviousTimeP>
  )
}