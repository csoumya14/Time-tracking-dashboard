import React,{useContext} from 'react'
import { DashboardContext } from '../../context';
import { TabElementContainer} from "./TabElementGroup.css"
import {ButtonTab} from '../../components/ButtonTab/ButtonTab'
import buttonData from '../../data/tabButtonData';

export const TabElementGroup = () => {
  const { isActiveTab,selectedTab,setSelectedTab } = useContext(DashboardContext);
  
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setSelectedTab(e.currentTarget.value)
      console.log(selectedTab)
    };
  
  return(
    <TabElementContainer role="tablist" aria-orientation="horizontal" aria-label="Dashboard">
      {buttonData.map(dataItem => (
        <ButtonTab key={dataItem.id} dataItem={dataItem} focus = {isActiveTab === Number(dataItem.id)} handleClick={handleClick} selectedTab={selectedTab}/>
      ))}
  </TabElementContainer>
  )
}

/*
type tabValuesOptions = {
  [key: number]: string
}

{selectedTab,setSelectedTab}:{selectedTab: string;
  setSelectedTab: Dispatch<SetStateAction<string>>}
*/