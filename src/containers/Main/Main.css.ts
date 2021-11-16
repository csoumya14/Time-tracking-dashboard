import styled from 'styled-components'

export const CardUpper = styled.div`
height:160px;
width:90%;
margin:1rem;
border-radius:15px;
grid-area: 1 / 1;
`
export const CardWrapper = styled.div`
display:grid;
`

export const CardLower = styled(CardUpper)`
width:90%;
height:122px;
top:0px;
align-self:flex-end;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const CardContainer = styled.main`
& ${CardWrapper}:nth-child(1){
  ${CardUpper}{
    background-color:${props => props.theme.palette.primary.lightRedForWork};
  }
  ${CardLower}{
    background-color:${props => props.theme.palette.neutral.darkBlue};  
  }
}
& ${CardWrapper}:nth-child(2){
    ${CardUpper}{
      background-color:${props => props.theme.palette.primary.softBlueForPlay};
    }
    ${CardLower}{
      background-color:${props => props.theme.palette.neutral.darkBlue};  
    }
}
& ${CardWrapper}:nth-child(3){
  ${CardUpper}{
    background-color:${props => props.theme.palette.primary.lightRedForStudy};
  }
  ${CardLower}{
    background-color:${props => props.theme.palette.neutral.darkBlue};  
  }
}
& ${CardWrapper}:nth-child(4){
  ${CardUpper}{
    background-color:${props => props.theme.palette.primary.limeGreenForExercise};
  }
  ${CardLower}{
    background-color:${props => props.theme.palette.neutral.darkBlue};  
  }
}
& ${CardWrapper}:nth-child(5){
  ${CardUpper}{
    background-color:${props => props.theme.palette.primary.violetForSocial};
  }
  ${CardLower}{
    background-color:${props => props.theme.palette.neutral.darkBlue};  
  }
}
& ${CardWrapper}:nth-child(6){
  ${CardUpper}{
    background-color:${props => props.theme.palette.primary.softOrangeForSelfCare};
  }
  ${CardLower}{
    background-color:${props => props.theme.palette.neutral.darkBlue};  
  }
}
`

export const CardHeadingWrapper = styled.div`
display:flex;
width:90%;
height:1em;
justify-content:space-between;
align-items:center;
`
export const Img = styled.img`
width:21px;
height:5px;
`

export const Para = styled.p`
font-size:18px;
color:#ffffff;
`
export const CardTimeWrapper = styled(CardHeadingWrapper)`
height:2.5em;
`

export const CurrentP = styled.p`
font-weight: 300;
font-size: 32px;
color:#ffffff;
`
export const PreviousP = styled.p`
font-size:15px;
color:${props => props.theme.palette.neutral.paleBlue};
`



