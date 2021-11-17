import React,{useContext} from 'react'
import {CardContainer} from './Card.css'
import { DashboardContext } from '../../context';
import {CardContents} from '../CardContents/CardContents'


export const Card = () => {
  const { data} = useContext(DashboardContext);
  return(
    <CardContainer tabIndex={0} role="tabpanel" id="daily-tab"
    aria-labelledby="daily" >
   {data.map(dataItem => (
     <CardContents key={dataItem.title} dataItem={dataItem} / >
   ))}  
 </CardContainer>
  )
}

