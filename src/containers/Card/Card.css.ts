import styled from 'styled-components'
import {CardUpper,CardWrapper} from '../CardContents/CardContents.css'
import {CardLower} from '../CardLowerContents/CardLowerContents.css'

export const CardContainer = styled.main`
& ${CardWrapper}:nth-child(1){
  ${CardUpper}{
    background-color:${props => props.theme.palette.primary.lightRedForWork};
    background-image:${props => props.theme.backgroundImages.work};
    background-repeat: no-repeat;
    background-position: 90% -5%;  
  } 
  
}
& ${CardWrapper}:nth-child(2){
    ${CardUpper}{
      background-color:${props => props.theme.palette.primary.softBlueForPlay};
      background-image:${props => props.theme.backgroundImages.play};
      background-repeat: no-repeat;
      background-position: 90% -5%; 
    }
  
}
& ${CardWrapper}:nth-child(3){
  ${CardUpper}{
    background-color:${props => props.theme.palette.primary.lightRedForStudy};
    background-image:${props => props.theme.backgroundImages.study};
    background-repeat: no-repeat;
    background-position: 90% -5%; 
  }
  
}
& ${CardWrapper}:nth-child(4){
  ${CardUpper}{
    background-color:${props => props.theme.palette.primary.limeGreenForExercise};
    background-image:${props => props.theme.backgroundImages.exercise};
    background-repeat: no-repeat;
    background-position: 90% -5%;
  }
  
}
& ${CardWrapper}:nth-child(5){
  ${CardUpper}{
    background-color:${props => props.theme.palette.primary.violetForSocial};
    background-image:${props => props.theme.backgroundImages.social};
    background-repeat: no-repeat;
    background-position: 90% -5%;
  }
  
}
& ${CardWrapper}:nth-child(6){
  ${CardUpper}{
    background-color:${props => props.theme.palette.primary.softOrangeForSelfCare};
    background-image:${props => props.theme.backgroundImages.selfCare};
    background-repeat: no-repeat;
    background-position: 90% -5%;
  }
  
}
`

