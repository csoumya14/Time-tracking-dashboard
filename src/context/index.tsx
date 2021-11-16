import axios from 'axios';
import React,{ createContext, useEffect, useState,Dispatch,SetStateAction } from 'react';
import { dataType } from '../dashBoardData';
import {useKeyboardNavigation} from '../helpers/KeyboardNavigation';

  interface DashboardContextData {
    data: dataType[];
    isActiveTab:number;
    selectedTab: string;
    setSelectedTab: Dispatch<SetStateAction<string>>;  
  }
  type setSelectedStateType = React.Dispatch<
    React.SetStateAction<string>
  >;

  const defaultSetSelectedState: setSelectedStateType = () => "";
  const DashboardContextDefaultValue: DashboardContextData = {
    data: [],
    isActiveTab: -1,
    selectedTab:"",
    setSelectedTab:defaultSetSelectedState,
  }
  
export const DashboardContext = createContext<DashboardContextData>(DashboardContextDefaultValue);
const Provider = ( { children }: { children: React.ReactNode } ) => {
  const [data,setData] = useState<dataType[]>([])
  const [selectedTab,setSelectedTab] = useState<string>('daily')
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveTab] = useKeyboardNavigation(3);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('http://localhost:3001/dataDashboard')
      .then(response => {
        console.log('promise fulfilled')
        setData(response.data)
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [])
  
  const ContextValue = {
    data,
    isLoading,
    isActiveTab,
    selectedTab,
    setSelectedTab,
  };
  return <DashboardContext.Provider value={ContextValue}>{children}</DashboardContext.Provider>;
};

export default Provider;