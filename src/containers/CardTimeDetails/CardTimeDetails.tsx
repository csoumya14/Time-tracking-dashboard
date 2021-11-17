import React from 'react'
import {CardTimeWrapper,CurrentP,PreviousP} from './CardTimeDetails.css'

interface DataValueProps{
  current: number;
  previous: number;   
}

export const CardTimeDetails = ({dataValue,timeFrame}:{dataValue:DataValueProps,timeFrame:string}) => {
  return(
    <CardTimeWrapper>
         <CurrentP>{dataValue.current} hrs</CurrentP>
         <PreviousP>Last <span>{timeFrame}</span> - {dataValue.previous}hrs</PreviousP>
    </CardTimeWrapper>
  )
}