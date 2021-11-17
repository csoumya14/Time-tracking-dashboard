import React from 'react'
import {CardWrapper,CardUpper} from './CardContents.css'
import {dataType} from '../../dashBoardData'
import { CardLowerContents } from '../CardLowerContents/CardLowerContents'

export const CardContents = ({dataItem}:{dataItem:dataType}) => {
  return(
    <CardWrapper key={dataItem.title}>
     <CardUpper></CardUpper>
     <CardLowerContents dataItem={dataItem}/>
     </CardWrapper>
  )
}