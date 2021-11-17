import React,{useContext} from 'react'
import {CardLower} from './CardLowerContents.css'
import { CardHeadingDetails } from '../CardHeadingDetails/CardHeadingDetails'
import {dataType} from '../../dashBoardData'
import { CardTimeDetails } from '../CardTimeDetails/CardTimeDetails'
import { DashboardContext } from '../../context';

export const CardLowerContents = ({dataItem}:{dataItem:dataType}) => {
  const { selectedTab } = useContext(DashboardContext);
  return(
    <CardLower>
       <CardHeadingDetails dataItem={dataItem}/>
       {selectedTab === 'daily' && (
        <CardTimeDetails timeFrame="Day" dataValue={dataItem.timeframes.daily}/>     
        )} 
      {selectedTab === 'weekly' && (
        <CardTimeDetails timeFrame="Week" dataValue={dataItem.timeframes.weekly}/>     
      )} 
      {selectedTab === 'monthly' && (
        <CardTimeDetails timeFrame="Month" dataValue={dataItem.timeframes.monthly}/>     
      )}   
    </CardLower>
  )
}