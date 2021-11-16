import React,{useContext} from 'react'
import { DashboardContext } from '../../context';
import { CardUpper,CardLower,CardWrapper,CardContainer,CardHeadingWrapper,Img,Para,CardTimeWrapper,CurrentP,PreviousP } from './Main.css'
import threeDots from '../../assets/icon-ellipsis.svg'

export const Main = () => {
  const { data,selectedTab } = useContext(DashboardContext);
  return(  
    <div>
   {selectedTab === 'daily' && (
   <CardContainer tabIndex={0} role="tabpanel" id="daily-tab"
       aria-labelledby="daily" >
      {data.map(d => (
        <CardWrapper key={d.title}>
        <CardUpper ></CardUpper>
        <CardLower>
          <CardHeadingWrapper>
          <Para>{d.title}</Para>
          <Img src={threeDots} alt=""/>
          </CardHeadingWrapper>
          <CardTimeWrapper>
            <CurrentP>{d.timeframes.daily.current} hrs</CurrentP>
            <PreviousP>Last <span>Day</span> - {d.timeframes.daily.previous}hrs</PreviousP>
          </CardTimeWrapper>
        </CardLower>
        </CardWrapper>
      ))}  
    </CardContainer>
    )} 
    {selectedTab === 'weekly' && (
      <CardContainer tabIndex={0} role="tabpanel" id="weekly-tab" aria-labelledby="weekly" >
      {data.map(d => (
        <CardWrapper key={d.title}>
          <CardUpper ></CardUpper>
          <CardLower>
            <CardHeadingWrapper>
            <Para>{d.title}</Para>
            <Img src={threeDots} alt=""/>
            </CardHeadingWrapper>
            <CardTimeWrapper>
            <CurrentP>{d.timeframes.weekly.current} hrs</CurrentP>
            <PreviousP>Last <span>Week</span> - {d.timeframes.weekly.previous}hrs</PreviousP>
            </CardTimeWrapper>
          </CardLower>
        </CardWrapper>
      ))}  
      </CardContainer>
  )}
  {selectedTab === 'monthly' && (
    <CardContainer tabIndex={0} role="tabpanel" id="monthly-tab" aria-labelledby="monthly" >
      {data.map(d => (
        <CardWrapper key={d.title}>
          <CardUpper ></CardUpper>
           <CardLower>
              <CardHeadingWrapper>
                <Para>{d.title}</Para>
                <Img src={threeDots} alt=""/>
              </CardHeadingWrapper>
              <CardTimeWrapper>
                <CurrentP>{d.timeframes.monthly.current} hrs</CurrentP>
                <PreviousP>Last <span>Month</span> - {d.timeframes.monthly.previous}hrs</PreviousP>
              </CardTimeWrapper>
            </CardLower>
          </CardWrapper>
      ))}  
    </CardContainer>
  )} 
</div>
  )
}