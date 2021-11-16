import React,{useContext} from 'react'
import { HeaderContainerDiv } from './ImageHeading.css';
import {ImageHeading} from '../ImageHeading/ImageHeading'
//import {RadioSelectElement} from '../RadioSelectContainer/RadioSelectContainer'
import { DashboardContext } from '../../context';
import { TabElementGroup } from '../TabElementGroup/TabElementGroup';


export const ImageHeadingTab = () => {
  const { data } = useContext(DashboardContext);
  
  console.log(data.length)
  return(
    <HeaderContainerDiv>
      <ImageHeading/>   
      <TabElementGroup  />
    </HeaderContainerDiv>
  )
}

