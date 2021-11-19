import React from 'react'
import {CardTimeWrapper} from './CardTimeDetails.css'
import {CurrentValueTime} from '../../components/CurrentValueTime/CurrentValueTime'
import {PreviousValueTime} from '../../components/PreviousValueTime/PreviousValueTime'

interface DataValueProps{
  current: number;
  previous: number;   
}

export const CardTimeDetails = ({dataValue,timeFrame}:{dataValue:DataValueProps,timeFrame:string}) => {
  return(
    <CardTimeWrapper>
         <CurrentValueTime currentTimeValue = {dataValue.current} />
         <PreviousValueTime previousTimeValue={dataValue.previous} timeFrame={timeFrame}/>
    </CardTimeWrapper>
  )
}