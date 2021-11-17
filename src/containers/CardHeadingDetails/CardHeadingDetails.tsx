import React from 'react'
import threeDots from '../../assets/icon-ellipsis.svg'
import { CardHeadingWrapper,Para,Img } from './CardHeadingDetails.css'
import {dataType} from '../../dashBoardData'


export const CardHeadingDetails = ({dataItem}:{dataItem:dataType}) => {
  return(
    <CardHeadingWrapper>
       <Para>{dataItem.title}</Para>
       <Img src={threeDots} alt=""/>
      </CardHeadingWrapper>
  )
}